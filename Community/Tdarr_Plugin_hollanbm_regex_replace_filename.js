/* eslint-disable */

// tdarrSkipTest
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_regex_replace_filename",
    Stage: "Post-processing",
    Name: "regex replace filename",
    Type: "Video",
    Operation: "Transcode",
    Description: `[Contains built-in filter] regex replace filename\n\n`,
    Version: "1.00",
    Tags: "post-processing",
    Inputs:[
      {
        name: 'regexFind',
        type: 'string',
        defaultValue: `\\b(HDTV|WEBDL|WEBRIP|Bluray)\\b`,
        inputUI: {
          type: 'text',
        },
        tooltip:
          `Regex to find/replace`,
      },
      {
        name: 'regexReplace',
        type: 'string',
        defaultValue: "TDARR $1",
        inputUI: {
          type: 'text',
        },
        tooltip:
          `Regex replacement string`,
      }
    ]
  };
};

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);

  try {
    var fs = require("fs");

    var fileNameOld = file._id;
    var regexFind = new RegExp(inputs.regexFind, "i");

    file._id = file._id.replace(regexFind, inputs.regexReplace);
    file.file = file.file.replace(regexFind, inputs.regexReplace);
    
    if (fileNameOld != file._id) {
      fs.renameSync(fileNameOld, file._id, {
        overwrite: true,
      });

      var response = {
        file,
        removeFromDB: false,
        updateDB: true,
        infoLog: `New filename: ${file._id} \n`,
      };

      return response;
    }
  } catch (err) {
    console.log(err);
  }
};
 
module.exports.details = details;
module.exports.plugin = plugin;