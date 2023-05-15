/* eslint-disable */
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_re_order_subtitle_streams",
    Stage: "Pre-processing",
    Name: "Re-order subtitle streams by Title",
    Type: "Subtitle",
    Operation: "Transcode",
    Description: `[Contains built-in filter] Specify a title for Tdarr to try and put as 1st subtitle track  \n\n`,
    Version: "1.00",
    Tags: "pre-processing,subtitle only,ffmpeg,configurable",
    Inputs: [
      {
        name: "title",
        type:'string',
        defaultValue:'dialogue',
        inputUI: {
          type: 'text',
        },
        tooltip: `Specify one language tag for Tdarr to try and put as 1st subtitle track

        \\nExample:\\n

        eng

        \\nExample:\\n

        en

        \\nExample:\\n

        fr

        \\nExample:\\n

        de
 
        `,
      },
    ],
  };
};

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
    
    const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  //Must return this object

  var response = {
    processFile: false,
    preset: "",
    container: ".mkv",
    handBrakeMode: false,
    FFmpegMode: false,
    reQueueAfter: false,
    infoLog: "",
  };

  console.log(inputs.title);

  if (inputs.title === undefined) {
    response.processFile = false;
    response.infoLog += "☒ Inputs not entered! \n";
    return response;
  }

  var desiredTrackPosition = file.ffProbeData.streams.filter(
    (stream) =>
      stream.codec_type.toLowerCase() == "video" ||
      stream.codec_type.toLowerCase() == "audio"
  ).length;

  var subtitleInLang = file.ffProbeData.streams.filter((stream) => {
    if (
      stream.codec_type.toLowerCase() == "subtitle" &&
      stream.tags &&
      stream.tags.title &&
      stream.tags.title.toLowerCase().includes(inputs.title.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  if (subtitleInLang.length == 0) {
    response.processFile = false;
    response.infoLog += "☒ No subtitle tracks in desired title! \n";
    return response;
  }

  var streamToMove = subtitleInLang[0];

  if (streamToMove.index == desiredTrackPosition) {
    response.processFile = false;
    response.infoLog +=
      "☑ Preferred title is already first subtitle track! \n";
    return response;
  }

  var ffmpegCommand = ", -c copy ";

  if (file.ffProbeData.streams[0].codec_type.toLowerCase() == "video") {
    ffmpegCommand += ` -map 0:v -map 0:a `;
  }

  var allSubtitleTracks = file.ffProbeData.streams.filter(
    (stream) => stream.codec_type.toLowerCase() == "subtitle"
  );

  var streamIdx;

  for (var i = 0; i < allSubtitleTracks.length; i++) {
    if (allSubtitleTracks[i].index == streamToMove.index) {
      streamIdx = i;
      break;
    }
  }

  ffmpegCommand += ` -map 0:s:${streamIdx} -disposition:s:0 default`;

  for (var i = 0; i < allSubtitleTracks.length; i++) {
    if (i !== streamIdx) {
      ffmpegCommand += ` -map 0:s:${i} `;
    }
    if (i !== 0) {
      ffmpegCommand += ` -disposition:s:${i} 0 `;
    }
  }

  ffmpegCommand += ` -map 0:d? `;

  response.processFile = true;
  response.preset = ffmpegCommand;
  response.container = `.` + file.container;
  response.handBrakeMode = false;
  response.FFmpegMode = true;
  response.reQueueAfter = true;
  response.infoLog += `☒ Desired subtitle lang is not first subtitle stream, moving! \n`;
  return response;
};



module.exports.details = details;
module.exports.plugin = plugin;