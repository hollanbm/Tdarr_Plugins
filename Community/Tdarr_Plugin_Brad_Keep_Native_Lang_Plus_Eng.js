/* eslint-disable no-await-in-loop */
module.exports.dependencies = ['axios', '@cospired/i18n-iso-languages'];
// tdarrSkipTest
const details = () => ({
  id: 'Tdarr_Plugin_Brad_Keep_Native_Lang_Plus_Eng',
  Stage: 'Pre-processing',
  Name: 'Remove all langs except native and English',
  Type: 'Audio',
  Operation: 'Transcode',
  Description: `This plugin will remove all language audio tracks except the 'native'
     (requires TMDB api key) and English.
    'Native' languages are the ones that are listed on tmdb`,
  Version: '1.01',
  Tags: 'pre-processing,configurable',
  Inputs: [
    {
      name: 'user_langs',
      type: 'string',
      defaultValue: '',
      inputUI: {
        type: 'text',
      },
      tooltip: 'Input a comma separated list of ISO-639-2 languages. It will still keep English and undefined tracks.'
        + '(https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes 639-2 column)'
        + '\\nExample:\\n'
        + 'nld,nor',
    },
    {
      name: 'tmdb_api_key',
      type: 'string',
      defaultValue: '',
      inputUI: {
        type: 'text',
      },
      tooltip: 'Input your TMDB api (v3) key here. (https://www.themoviedb.org/)',
    },
    {
      name: 'commentary',
      type: 'boolean',
      defaultValue: false,
      inputUI: {
        type: 'dropdown',
        options: [
          'false',
          'true',
        ],
      },
      tooltip: `Specify if audio tracks that contain commentary/description should be removed.
                 \\nExample:\\n
                 true
  
                 \\nExample:\\n
                 false`,
    },
  ],
});

const response = {
  processFile: false,
  preset: ', -map 0 ',
  container: '.',
  handBrakeMode: false,
  FFmpegMode: true,
  reQueueAfter: false,
  infoLog: '',
};

const processStreams = (original_language, remove_commentary, file, user_langs) => {
  // eslint-disable-next-line import/no-unresolved
  const languages = require('@cospired/i18n-iso-languages');
  const tracks = {
    keep: [],
    remove: [],
    remLangs: '',
  };
  let streamIndex = 0;

  // If the original language is pulled as Chinese 'cn' is used.  iso-language expects 'zh' for Chinese.
  const langsTemp = original_language === 'cn' ? 'zh' : original_language;

  let langs = [];

  langs.push(languages.alpha2ToAlpha3B(langsTemp));

  // Some console reporting for clarification of what the plugin is using and reporting.
  response.infoLog += `Original language: ${langsTemp}, Using code: ${languages.alpha2ToAlpha3B(langsTemp)}\n`;

  if (user_langs) {
    langs = langs.concat(user_langs);
  }
  if (!langs.includes('eng')) langs.push('eng');
  if (!langs.includes('und')) langs.push('und');

  response.infoLog += 'Keeping languages: ';
  // Print languages to UI
  langs.forEach((l) => {
    response.infoLog += `${languages.getName(l, 'en')}, `;
  });

  response.infoLog = `${response.infoLog.slice(0, -2)}\n`;

  for (let i = 0; i < file.ffProbeData.streams.length; i += 1) {
    const stream = file.ffProbeData.streams[i];

    if (stream.codec_type === 'audio') {
      if (!stream.tags) {
        response.infoLog += `☒No tags found on audio track ${streamIndex}. Keeping it. \n`;
        tracks.keep.push(streamIndex);
        streamIndex += 1;
        // eslint-disable-next-line no-continue
        continue;
      }
      if (stream.tags.language) {
        if (langs.includes(stream.tags.language)) {
          tracks.keep.push(streamIndex);
        } else {
          tracks.remove.push(streamIndex);
          response.preset += `-map -0:a:${streamIndex} `;
          tracks.remLangs += `${languages.getName(stream.tags.language, 'en')}, `;
        }
        streamIndex += 1;
      } else {
        response.infoLog += `☒No language tag found on audio track ${streamIndex}. Keeping it. \n`;
      }

      if (
        remove_commentary === true
        && (stream.tags.title
          .toLowerCase()
          .includes('commentary')
          || stream.tags.title
            .toLowerCase()
            .includes('description')
          || stream.tags.title.toLowerCase().includes('sdh'))
      ) {
        tracks.remove.push(streamIndex);

        response.preset += `-map -0:a:${streamIndex} `;
        response.infoLog += `☑Removing commentary track. \n`;
      }
    }
  }
  response.preset += ' -c copy -max_muxing_queue_size 9999';
  return tracks;
};

// eslint-disable-next-line no-unused-vars
const plugin = async (file, librarySettings, inputs, otherArguments) => {
  const lib = require('../methods/lib')();
  // eslint-disable-next-line no-unused-vars,no-param-reassign
  inputs = lib.loadDefaultValues(inputs, details);

  // eslint-disable-next-line import/no-unresolved
  const axios = require('axios').default;
  response.container = `.${file.container}`;

  response.infoLog += `xxxxx${inputs}xxxxxx`;


  if(tmdbID = file.meta.FileName.match(/{tmdb-(\d+)}/)[1]) {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${tmdbID}?api_key=${inputs.tmdb_api_key}&language=en-US`);
    
    if(original_language = response.data?.original_language) {
      const tracks = processStreams(original_language, inputs.remove_commentary, file, inputs.user_langs ? inputs.user_langs.split(',') : '');
      if (tracks.remove.length > 0) {
        if (tracks.keep.length > 0) {
          response.infoLog += `☑Removing tracks with languages: ${tracks.remLangs.slice(0, -2)}. \n`;
          response.processFile = true;
          response.infoLog += '\n';
        } else {
          response.infoLog += '☒Cancelling plugin otherwise all audio tracks would be removed. \n';
        }
      } else {
        response.infoLog += '☒No audio tracks to be removed. \n';
      }
    }
    else {
        response.infoLog += 'Couldn\'t get language from tmdb \n';
    }
  }
  else {
    response.infoLog += 'Couldn\'t get tmdbid from filename \n';
  }

  return response;
};

module.exports.details = details;
module.exports.plugin = plugin;