/* eslint-disable */
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_Remove_attachments",
    Stage: "Pre-processing",
    Name: "Remove Data Streams ",
    Type: "Video",
    Operation: "Transcode",
    Description: `[Contains built-in filter] This plugin removes attachments if detected. The output container is mkv \n\n`,
    Version: "1.00",
    Tags: "pre-processing,ffmpeg",
    Inputs:[],
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
    FFmpegMode: false,
    reQueueAfter: false,
    infoLog: "",
  };

  if (file.fileMedium !== "video") {
    console.log("File is not video");

    response.infoLog += "☒File is not video \n";
    response.processFile = false;

    return response;
  } else {
    response.FFmpegMode = true;
    response.container = ".mkv";

    var hasAttachment = false;

    for (var i = 0; i < file.ffProbeData.streams.length; i++) {
      try {
        if (
          file.ffProbeData.streams[i].codec_type.toLowerCase() == "attachment"
        ) {
            hasAttachment = true;
        }
      } catch (err) {}
    }

    if (hasAttachment) {
      response.infoLog += "☒File has attachment streams \n";
      response.preset = ",-map 0 -c copy -map -0:t -sn -dn -map_chapters -1";
      // response.preset = ",-map 0 -c copy -dn -map_chapters -1";
      response.reQueueAfter = true;
      response.processFile = true;
      return response;
    } else {
      response.infoLog += "☑File has no attachment streams! \n";
    }

    response.infoLog += "☑File meets conditions! \n";
    return response;
  }
}

module.exports.details = details;
module.exports.plugin = plugin;
