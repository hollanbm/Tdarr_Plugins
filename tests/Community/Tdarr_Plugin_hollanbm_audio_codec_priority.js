/* eslint max-len: 0 */
const _ = require('lodash');
const run = require('../helpers/run');

const tests = [
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample1.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: true,
      preset: ', -map 0 -map -0:a:3 -map -0:a:1 -c copy -max_muxing_queue_size 9999',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: true,
      infoLog: 'removing pcm_s16le jpn stream index 3\nremoving aac eng stream index 1\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample2.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: true,
      preset: ', -map 0 -map -0:a:3 -map -0:a:1 -c copy -max_muxing_queue_size 9999',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: true,
      infoLog: 'removing pcm_s16le jpn stream index 3\nremoving dts eng stream index 1\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample3.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: true,
      preset: ', -map 0 -map -0:a:2 -c copy -max_muxing_queue_size 9999',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: true,
      infoLog: 'removing pcm_s16le jpn stream index 2\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample4.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: false,
      preset: '',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: false,
      infoLog: '☒Only 1 audio track, skipping\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample5.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: false,
      preset: '',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: false,
      infoLog: '☒nothing to do, only 1 stream of each langauge\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample6.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: true,
      preset: ', -map 0 -map -0:a:1 -c copy -max_muxing_queue_size 9999',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: true,
      infoLog: 'removing ac3 eng stream index 1\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample7.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: false,
      preset: '',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: false,
      infoLog: '☒nothing to do, only 1 stream of each langauge\n',
    },
  },
  {
    input: {
      file: _.cloneDeep(require('../sampleData/media/codec_priority/sample8.json')),
      librarySettings: {},
      inputs: {},
      otherArguments: {},
    },
    output: {
      processFile: false,
      preset: '',
      container: '.mp4',
      handBrakeMode: false,
      FFmpegMode: true,
      reQueueAfter: false,
      infoLog: '☒nothing to do, only 1 stream of each langauge\n',
    },
  },
];

run(tests);
