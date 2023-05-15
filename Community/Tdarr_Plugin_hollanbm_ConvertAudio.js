/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
const details = () => ({
  id: 'Tdarr_Plugin_hollanbm_ConvertAudio',
  Stage: 'Pre-processing',
  Name: 'Brad-Convert audio streams',
  Type: 'Audio',
  Operation: 'Transcode',
  Description: 'This plugin can convert any 2.0 audio track/s to AAC and can create downmixed audio tracks. \n\n',
  Version: '2.4',
  Tags: 'pre-processing,ffmpeg,audio only,configurable',
  Inputs: [],
});

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  const response = {
    processFile: false,
    container: `.${file.container}`,
    handBrakeMode: false,
    FFmpegMode: true,
    reQueueAfter: true,
    infoLog: '',
  };

  // Check if file is a video. If it isn't then exit plugin.
  if (file.fileMedium !== 'video') {
    // eslint-disable-next-line no-console
    console.log('File is not video');
    response.infoLog += '☒File is not video. \n';
    response.processFile = false;
    return response;
  }

  // Set up required variables.
  let ffmpegCommandInsert = '';
  let audioIdx = 0;
  let convert = false;

  // check audio codecs
  const notAacCount = file.ffProbeData.streams.filter(
    (row) => row.codec_type === 'audio'
             && row.codec_name !== 'aac',
  )?.length;

  if (notAacCount > 0) {
    convert = true;

    try {
      // Go through each stream in the file.
      for (let i = 0; i < file.ffProbeData.streams.length; i++) {
        // Check if stream is audio.
        if (file.ffProbeData.streams[i].codec_type.toLowerCase() === 'audio') {
          // Catch error here incase user left inputs.downmix empty.
          // check codec type
          if (file.ffProbeData.streams[i].codec_name !== 'aac') {
            ffmpegCommandInsert += `-c:a:${audioIdx} aac -b:a:${audioIdx} 512k `;
          } else {
            ffmpegCommandInsert += `-c:a:${audioIdx} copy `;
          }
          audioIdx += 1;
        }
      }
    } catch (err) {
      convert = false;
      response.infoLog += '☑error encountered, ABORT \n';
    }
  }

  // Convert file if convert variable is set to true.
  if (convert === true) {
    response.processFile = true;
    response.preset = `,-probesize 100M -analyzeduration 250M -map 0 -c:v copy -c:s copy ${ffmpegCommandInsert} `
    + '-strict -2 -max_muxing_queue_size 9999 ';
  } else {
    response.infoLog += '☑File contains all required audio formats. \n';
    response.processFile = false;
  }
  return response;
};
module.exports.details = details;
module.exports.plugin = plugin;
