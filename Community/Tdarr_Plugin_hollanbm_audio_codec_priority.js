/* eslint-disable */
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_audio_codec_priority",
    Stage: "Pre-processing",
    Name: "Keep Preferred Codec, per language",
    Type: "Video",
    Operation: "Transcode",
    Description: `\n
    This plugin sifts through the audio tracks, searching for the first matching codec (per language), all other codecs will be removed from the resultant file.

    Currently the codec list is hard coded, this is to account for differences between dts and dts-hd-ma. Eventually it will be updated to also accept the codec list as an input
    1) truehd
    2) dts-hd-ma
    3) flac
    4) PCM
    5) EAC3
    6) AC3
    7) AAC
    8) MP3
    \n`,
    Version: "1.00",
    Tags: "pre-processing,ffmpeg,audio only",
    Inputs: [
      {
        name: 'languages',
        type: 'string',
        defaultValue: 'jpn,eng,und',
        inputUI: {
          type: 'text',
        },
        tooltip: `defaults to jpn,eng, und`,
      },
    ],
  };
}

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {

  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  //Must return this object

  var response = {
    processFile: false,
    preset: "",
    container: ".mp4",
    handBrakeMode: false,
    FFmpegMode: true,
    reQueueAfter: false,
    infoLog: "",
  };

  if (file.fileMedium !== "video") {
    response.infoLog += "☒File is not video \n";
    return response;
  }

  var audioTrackCount = file.ffProbeData.streams.filter(stream => stream.codec_type?.toLowerCase() == "audio").length

  if (audioTrackCount == 1) {
    response.infoLog += "☒Only 1 audio track, skipping\n";
    return response;
  }
  else {
    var ffmpegCommandInsert = "";

    var codecs = [
      { name: "truehd" },
      { name: "dts", profile: "ma" },
      { name: "flac" },
      { name: "pcm" },
      { name: "eac3" },
      { name: "dts" },
      { name: "ac3" },
      { name: "aac" },
      { name: "mp3" },
    ];

    var videoStreamCount = file.ffProbeData.streams.filter(stream => stream.codec_type?.toLowerCase() == "video").length

    var langCount = []
    for (const lang of inputs.languages.split(',')) {
      streamLangCount = file.ffProbeData.streams.filter(stream => stream.codec_type?.toLowerCase() == "audio" && stream.tags.language?.toLowerCase().includes(lang)).length
      if (streamLangCount >= 1) {
        langCount.push({ lang: lang, count: streamLangCount });
      }
    }

    if (langCount.map(item => item.count).reduce((sum, count) => sum += count, 0) == langCount.length) {
      response.infoLog += "☒nothing to do, only 1 stream of each langauge\n"
      return response;
    }
    else {
      for (const lang of inputs.languages.split(',')) {
        streamLangCount = file.ffProbeData.streams.filter(stream => stream.codec_type?.toLowerCase() == "audio" && stream.tags.language?.toLowerCase().includes(lang)).length

        if (streamLangCount > 1) {
          var streams = file.ffProbeData.streams.filter(stream => stream.codec_type?.toLowerCase() == "audio" && stream.tags.language?.toLowerCase().includes(lang));

          for (const codec of codecs) {
            var streamToKeep = streams.find(
              stream =>
                (codec.profile &&
                  stream.codec_name?.toLowerCase().includes(codec.name) &&
                  stream.profile != undefined &&
                  stream.profile?.toLowerCase().includes(codec.profile)
                )
                ||
                (
                  stream.codec_name?.toLowerCase().includes(codec.name)
                )
            );

            if (streamToKeep) {
              // remove the other streams
              for (const stream of streams.filter(item => item != streamToKeep)) {
                response.infoLog += `removing ${stream.codec_name} ${lang} stream index ${stream.index - videoStreamCount}\n`
                ffmpegCommandInsert += ` -map -0:a:${stream.index - videoStreamCount}`;
              }
              break;
            }
          }
        }
      }
    }
  }

  response.processFile = true;
  response.preset = `, -map 0 ${ffmpegCommandInsert.trim()} -c copy -max_muxing_queue_size 9999`;
  response.container = "." + file.container;
  response.handBrakeMode = false;
  response.FFmpegMode = true;
  response.reQueueAfter = true;
  return response;
}

module.exports.details = details;
module.exports.plugin = plugin;
