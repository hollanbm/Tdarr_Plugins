const details = () => ({
  id: 'Tdarr_Plugin_00td_filter_by_filename',
  Stage: 'Pre-processing',
  Name: 'Filter by filename',
  Type: 'Video',
  Operation: 'Filter',
  Description: 'Only allow specified filenames to be processed \n\n',
  Version: '1.00',
  Tags: 'filter',
  Inputs: [
    {
      name: 'filenamesToProcess',
      type: 'string',
      defaultValue: '',
      inputUI: {
        type: 'text',
      },
      tooltip:
        `Enter a comma separated list of filenames to be processed.
         Leave blank if using filenamesToNotProcess.
         480p,576p,720p,1080p,4KUHD,DCI4K,8KUHD,Other
         `,
    },
    {
      name: 'filenamesToNotProcess',
      type: 'string',
      defaultValue: '',
      inputUI: {
        type: 'text',
      },
      tooltip:
        'Enter a comma separated list of filenames to be not be processed.'
        + ' Leave blank if using filenamesToProcess',
    },
  ],
});

// eslint-disable-next-line no-unused-vars
const plugin = (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);
  const response = {
    processFile: false,
    infoLog: '',
  };

  if (!file.video_resolution) {
    throw new Error('File has no resolution!');
  }

  const fileName = file.meta.FileName;

  if (inputs.filenamesToProcess !== '') {
    const matchList = inputs.filenamesToProcess.split(',');
    if (matchList.some(match => fileName.includes(match))) {
      response.processFile = true;
      response.infoLog += 'File is in filenamesToProcess. Moving to next plugin.';
    } else {
      response.processFile = false;
      response.infoLog += 'File is not in filenamesToProcess. Breaking out of plugin stack.';
    }
  }

  if (inputs.filenamesToNotProcess !== '') {
    const matchList = inputs.filenamesToNotProcess.split(',');
    if (matchList.some(match => fileName.includes(match))) {
      response.processFile = false;
      response.infoLog += 'File is in filenamesToNotProcess. Breaking out of plugin stack.';
    } else {
      response.processFile = true;
      response.infoLog += 'File is not in filenamesToNotProcess. Moving to next plugin.';
    }
  }

  return response;
};

module.exports.details = details;
module.exports.plugin = plugin;
