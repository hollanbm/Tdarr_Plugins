/* eslint-disable */

// tdarrSkipTest
const details = () => {
  return {
    id: "Tdarr_Plugin_hollanbm_append_to_filename",
    Stage: "Post-processing",
    Name: "Append Text to filename",
    Type: "Video",
    Operation: "Transcode",
    Description: `[Contains built-in filter] If the filename contains '264' or '265', this plugin renames 264 files to 265 or vice versa depending on codec. \n\n`,
    Version: "1.00",
    Tags: "post-processing",
    Inputs:[
      {
        name: 'appendText',
        type: 'string',
        defaultValue: '[TDARR]',
        inputUI: {
          type: 'text',
        },
        tooltip:
          `Text to append to end of file`,
      }
    ]
  };
};

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  
  function appendToFilename(filename, string) {
    return filename.substring(0, filename.lastIndexOf(".")) + string + filename.substring(filename.lastIndexOf("."));
  }

  try {
    var fs = require("fs");
    var fileNameOld = file._id;

    file._id = appendToFilename(file._id, inputs.appendText);
    file.file = appendToFilename(file.file, inputs.appendText);

    
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