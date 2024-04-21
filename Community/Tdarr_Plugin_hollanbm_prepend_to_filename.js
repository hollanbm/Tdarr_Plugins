/* eslint-disable */

// tdarrSkipTest
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_prepend_to_filename",
    Stage: "Post-processing",
    Name: "prepend Text to filename",
    Type: "Video",
    Operation: "Transcode",
      Description: `[Contains built-in filter] prepends text to end of filename\n\n`,
    Version: "1.00",
    Tags: "post-processing",
    Inputs:[
      {
        name: 'prependText',
        type: 'string',
        defaultValue: '{TDARR}_',
        inputUI: {
          type: 'text',
        },
        tooltip:
          `Text to prepend to end of file`,
      }
    ]
  };
};

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  
  function prependToFilename(filename, string) {
    return string + filename;
  }

  try {
    var fs = require("fs");
    var fileNameOld = file._id;

    file._id = prependToFilename(file._id, inputs.prependText);
    file.file = prependToFilename(file.file, inputs.prependText);

    
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