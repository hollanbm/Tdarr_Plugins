"use strict";
/* eslint-disable no-template-curly-in-string */
/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", { value: true });
exports.details = void 0;
var details = function () { return ({
  name: "DeNiX's Workflow v3 (online repo)",
  description: "DeNiX's Workflow v3 (online repo)",
  tags: "",
  flowPlugins: [
    {
      name: "🔧 DeNiX Enhanced MKV Pre-Process: Advanced Cleanup, Remux & Subtitle Language Filtering",
      sourceRepo: "Community",
      pluginName: "Remuxer",
      version: "1.0.0",
      inputsDB: {
        fix_timestamps: "true",
        enable_qa_checks: "true",
        reorder_streams: "true",
        remove_attachments: "true",
        remove_image_streams: "true",
        remove_data_streams: "true",
        preferred_subtitle_languages: "   eng,en,dut,nld,nl,tur,tr,und"
      },
      fpEnabled: true,
      id: "A_xw4g4K-",
      position: {
        x: 300,
        y: 1152
      }
    },
    {
      name: "🔄 DeNiX Enhanced Set Original File: Advanced File Restoration & Validation",
      sourceRepo: "Community",
      pluginName: "setOriginalFile",
      version: "1.0.0",
      inputsDB: {
        enablePathAnalysis: "true",
        enableIntegrityChecks: "true",
        generateReport: "true",
        enableValidation: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "NosZpR5PC",
      position: {
        x: 384,
        y: 996
      }
    },
    {
      name: "⚖️ DeNiX Enhanced File Comparison: Advanced Size & Duration Validation",
      sourceRepo: "Community",
      pluginName: "SizeDurationChecker",
      version: "1.0.0",
      inputsDB: {
        sizeGreaterThan: "25",
        enableDurationCheck: "true",
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        generateReport: "true"
      },
      fpEnabled: true,
      id: "OCJoQxnk4",
      position: {
        x: 384,
        y: 912
      }
    },
    {
      name: "⏰ DeNiX Enhanced Wait: Advanced Timing & Progress Control",
      sourceRepo: "Community",
      pluginName: "waitTimeouter",
      version: "1.0.0",
      inputsDB: {
        update_interval: "2",
        amount: "30",
        milestone_notifications: "true",
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        custom_message: "Keep patience, Dont worry, All Be allright, Be happy, I got U..."
      },
      fpEnabled: true,
      id: "FTCjHopiz",
      position: {
        x: 300,
        y: 2496
      }
    },
    {
      name: "📊 DeNiX Enhanced MediaInfo Analyzer & Reporter: Comprehensive Analysis & Comparison",
      sourceRepo: "Community",
      pluginName: "MediaInfoComparator",
      version: "1.0.0",
      inputsDB: {
        report_format: "json",
        showPerformanceMetrics: "true",
        enable_qa_checks: "true",
        processing_mode: "compare",
        cleanup_source_files: "true"
      },
      fpEnabled: true,
      id: "Dpwk_jykk",
      position: {
        x: 300,
        y: 2040
      }
    },
    {
      name: "💥 DeNiX Enhanced Fail Flow: Controlled Error Generation & Flow Termination",
      sourceRepo: "Community",
      pluginName: "failFlow",
      version: "1.0.0",
      fpEnabled: true,
      id: "N9OM4ev_c",
      position: {
        x: 1128,
        y: -120
      }
    },
    {
      name: "📊 DeNiX Enhanced MKVPropEdit: Metadata & Statistics Manager",
      sourceRepo: "Community",
      pluginName: "MKVPropEditor",
      version: "1.0.0",
      inputsDB: {
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "eMck2JUB2",
      position: {
        x: 300,
        y: 1632
      }
    },
    {
      name: "📊 DeNiX Enhanced MKVPropEdit: Metadata & Statistics Manager",
      sourceRepo: "Community",
      pluginName: "MKVPropEditor",
      version: "1.0.0",
      inputsDB: {
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "sz6z-Eu6S",
      position: {
        x: 384,
        y: 684
      }
    },
    {
      name: "🔧 DeNiX Enhanced MKV Pre-Process: Advanced Cleanup, Remux & Subtitle Language Filtering",
      sourceRepo: "Community",
      pluginName: "Remuxer",
      version: "1.0.0",
      inputsDB: {
        preferred_subtitle_languages: "   eng,en,dut,nld,nl,tur,tr,und",
        remove_data_streams: "true",
        remove_image_streams: "true",
        remove_attachments: "true",
        reorder_streams: "true",
        enable_qa_checks: "true",
        fix_timestamps: "true"
      },
      fpEnabled: true,
      id: "-nZwR4tIs",
      position: {
        x: 384,
        y: 564
      }
    },
    {
      name: "📊 DeNiX Enhanced MKVPropEdit: Metadata & Statistics Manager",
      sourceRepo: "Community",
      pluginName: "MKVPropEditor",
      version: "1.0.0",
      inputsDB: {
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "bu_B8tYn-",
      position: {
        x: 216,
        y: 684
      }
    },
    {
      name: "🔧 DeNiX Enhanced MKV Pre-Process: Advanced Cleanup, Remux & Subtitle Language Filtering",
      sourceRepo: "Community",
      pluginName: "Remuxer",
      version: "1.0.0",
      inputsDB: {
        preferred_subtitle_languages: "   eng,en,dut,nld,nl,tur,tr,und",
        remove_data_streams: "true",
        remove_image_streams: "true",
        remove_chapters: "false",
        remove_attachments: "true",
        enable_qa_checks: "true",
        reorder_streams: "true",
        fix_timestamps: "true"
      },
      fpEnabled: true,
      id: "GP48wJhsI",
      position: {
        x: 216,
        y: 564
      }
    },
    {
      name: "📢 DeNiX Information & Compatibility Notice: Important Guidelines & Support Info",
      sourceRepo: "Community",
      pluginName: "startInformercial",
      version: "1.0.0",
      inputsDB: {
        showPlatformInfo: "true",
        showDockerInfo: "true",
        showSupportLinks: "true",
        showPerformanceTips: "true",
        displayLevel: "essential"
      },
      fpEnabled: true,
      id: "HWmH1bWmr",
      position: {
        x: 228,
        y: -48
      }
    },
    {
      name: "🚀 DeNiX Enhanced Input File: Advanced Validation & Analysis",
      sourceRepo: "Community",
      pluginName: "inputFile",
      version: "1.0.0",
      inputsDB: {
        fileAccessChecks: "true",
        pauseNodeIfAccessChecksFail: "true",
        showFileSummary: "true",
        enable_qa_checks: "true",
        logging_level: "info",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "2Icv3GyQw",
      position: {
        x: 228,
        y: -132
      }
    },
    {
      name: "🔄 DeNiX Enhanced Set Original File: Advanced File Restoration & Validation",
      sourceRepo: "Community",
      pluginName: "setOriginalFile",
      version: "1.0.0",
      inputsDB: {
        enableValidation: "true",
        enablePathAnalysis: "true",
        enableIntegrityChecks: "true",
        generateReport: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "US1u0INQJ",
      position: {
        x: 324,
        y: 264
      }
    },
    {
      name: "🖥️ DeNiX Enhanced OS & Docker Detection: Intelligent Platform Routing",
      sourceRepo: "Community",
      pluginName: "checkNodeOS",
      version: "1.0.0",
      inputsDB: {
        enableDetectionLogging: "true",
        enableDockerDetection: "true",
        includeSystemInfo: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "0KxRrZfHC",
      position: {
        x: 144,
        y: 264
      }
    },
    {
      name: "🔧 DeNiX Enhanced MKV Pre-Process: Advanced Cleanup, Remux & Subtitle Language Filtering",
      sourceRepo: "Community",
      pluginName: "Remuxer",
      version: "1.0.0",
      inputsDB: {
        fix_timestamps: "true",
        enable_qa_checks: "true",
        reorder_streams: "true",
        remove_attachments: "true",
        remove_image_streams: "true",
        remove_data_streams: "true",
        preferred_subtitle_languages: "   eng,en,dut,nld,nl,tur,tr,und"
      },
      fpEnabled: true,
      id: "93yplJaV8",
      position: {
        x: 36,
        y: 564
      }
    },
    {
      name: "📊 DeNiX Enhanced MKVPropEdit: Metadata & Statistics Manager",
      sourceRepo: "Community",
      pluginName: "MKVPropEditor",
      version: "1.0.0",
      inputsDB: {
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "-F6pXqrGq",
      position: {
        x: 36,
        y: 696
      }
    },
    {
      name: "🎯 DeNiX Enhanced Video Analysis: Comprehensive Codec & HDR Detection",
      sourceRepo: "Community",
      pluginName: "HDRVideoCodecMediainfoDumper",
      version: "1.0.0",
      inputsDB: {
        debugMode: "true",
        enableJsonExport: "true",
        showPerformanceMetrics: "true",
        forceOverwrite: "true"
      },
      fpEnabled: true,
      id: "cGy3DI_j5",
      position: {
        x: 228,
        y: 444
      }
    },
    {
      name: "🌟 DeNiX Enhanced Dolby Vision & HDR10+: Specialized HandBrake Encoder v4.0",
      sourceRepo: "Community",
      pluginName: "DeNiXHandbrakeManagerHDRDV",
      version: "1.0.0",
      inputsDB: {
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        generateReport: "true",
        handbrakeCLIPathLinux: "HandBrakeCLI"
      },
      fpEnabled: true,
      id: "dFoz1ZK4a",
      position: {
        x: 216,
        y: 792
      }
    },
    {
      name: "🎬 DeNiX Enhanced HandBrake: Smart Encoder with Resolution & Bitrate Control v4.0",
      sourceRepo: "Community",
      pluginName: "DeNiXHandbrakeManager",
      version: "1.0.0",
      inputsDB: {
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        enableBitrateFiltering: "true",
        videoEncoder: "qsv_av1",
        tenBitEncoding: "true"
      },
      fpEnabled: true,
      id: "mqJ1MHeGv",
      position: {
        x: 384,
        y: 792
      }
    },
    {
      name: "⚖️ DeNiX Enhanced File Comparison: Advanced Size & Duration Validation",
      sourceRepo: "Community",
      pluginName: "SizeDurationChecker",
      version: "1.0.0",
      inputsDB: {
        sizeGreaterThan: "25",
        enableDurationCheck: "true",
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        generateReport: "true"
      },
      fpEnabled: true,
      id: "nWZaPkmrt",
      position: {
        x: 216,
        y: 912
      }
    },
    {
      name: "🔄 DeNiX Enhanced Set Original File: Advanced File Restoration & Validation",
      sourceRepo: "Community",
      pluginName: "setOriginalFile",
      version: "1.0.0",
      inputsDB: {
        enablePathAnalysis: "true",
        enableIntegrityChecks: "true",
        generateReport: "true",
        enableValidation: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "AEd17Ss03",
      position: {
        x: 216,
        y: 996
      }
    },
    {
      name: "",
      sourceRepo: "Community",
      pluginName: "comment",
      version: "1.0.0",
      fpEnabled: true,
      id: "jER2rmW_i",
      position: {
        x: 12,
        y: 1020
      }
    },
    {
      name: "📝 DeNiX Subtitle Cleaning: Language Filtering & Stream Management",
      sourceRepo: "Community",
      pluginName: "SubtitleCleaner",
      version: "1.0.0",
      inputsDB: {
        subtitle_languages: "eng,dut,nld,tur,und",
        remove_commentary_subs: "true",
        remove_signs_and_songs: "true",
        remove_cc_sdh: "true"
      },
      fpEnabled: true,
      id: "crWn6S-jF",
      position: {
        x: 300,
        y: 1272
      }
    },
    {
      name: "🎵 DeNiX Audio Processing: Language Detection + Opus Conversion",
      sourceRepo: "Community",
      pluginName: "AudioProcessor",
      version: "1.0.0",
      inputsDB: {
        enable_language_filtering: "true",
        user_langs: "eng,dut,nld,tur",
        enable_audio_conversion: "true",
        remove_commentary_audio: "true",
        remove_lower_quality_duplicates: "true"
      },
      fpEnabled: true,
      id: "1ESoCNGEN",
      position: {
        x: 300,
        y: 1404
      }
    },
    {
      name: "🔄 DeNiX Stream Ordering: Advanced Stream Layout Optimization",
      sourceRepo: "Community",
      pluginName: "Reordering",
      version: "1.0.0",
      inputsDB: {
        preferredLanguages: "eng,en,dut,nld,nl,tur,tr,und",
        defaultAudioStream: "eng 6,eng 2,nld 6,nld 2,tur 6,tur 2",
        defaultSubtitleStream: "nld,tur,eng",
        codecPreference: "",
        quality_based_defaults: "false",
        skip_redundant_operations: "true",
        show_stream_comparison: "true"
      },
      fpEnabled: true,
      id: "_GgWavTHK",
      position: {
        x: 300,
        y: 1524
      }
    },
    {
      name: "🩺 DeNiX Enhanced Health Check: Advanced File Validation",
      sourceRepo: "Community",
      pluginName: "HealthChecker",
      version: "1.0.0",
      inputsDB: {
        showProgress: "true",
        deepAnalysis: "false",
        generateReport: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "ql6i6lSEC",
      position: {
        x: 300,
        y: 1812
      }
    },
    {
      name: "📊 DeNiX Enhanced MediaInfo Analyzer & Reporter: Comprehensive Analysis & Comparison",
      sourceRepo: "Community",
      pluginName: "MediaInfoComparator",
      version: "1.0.0",
      inputsDB: {
        report_format: "json",
        showPerformanceMetrics: "true",
        enable_qa_checks: "true"
      },
      fpEnabled: true,
      id: "KDmzRrtYe",
      position: {
        x: 300,
        y: 1920
      }
    },
    {
      name: "⏰ DeNiX Enhanced Wait: Advanced Timing & Progress Control",
      sourceRepo: "Community",
      pluginName: "waitTimeouter",
      version: "1.0.0",
      inputsDB: {
        update_interval: "2",
        amount: "30",
        milestone_notifications: "true",
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        custom_message: "Keep patience, Dont worry, All Be allright, Be happy, I got U..."
      },
      fpEnabled: true,
      id: "b8Bj3nlYk",
      position: {
        x: 300,
        y: 2280
      }
    },
    {
      name: "🎯 DeNiX Enhanced Universal Unmonitor: Advanced *ARR Integration",
      sourceRepo: "Community",
      pluginName: "unmonitorArr",
      version: "1.0.0",
      inputsDB: {
        stop_on_success: "true",
        sonarr1_unmonitor_series: "true",
        sonarr2_unmonitor_series: "true",
        retry_with_current: "true",
        enable_qa_checks: "true",
        showPerformanceMetrics: "true",
        generateReport: "true"
      },
      fpEnabled: true,
      id: "NQoQ3sCD6",
      position: {
        x: 300,
        y: 2616
      }
    },
    {
      name: "🔔 DeNiX Discord Notification: Enhanced Transcoding Reports",
      sourceRepo: "Community",
      pluginName: "DiscordNotifiarr",
      version: "1.0.0",
      fpEnabled: true,
      id: "toewafx7j",
      position: {
        x: 300,
        y: 2844
      }
    },
    {
      name: "📡 DeNiX Enhanced Multi-Instance Arr Notifier: Advanced Notification System",
      sourceRepo: "Community",
      pluginName: "notifyArr",
      version: "1.0.0",
      inputsDB: {
        enable_qa_checks: "true",
        showPerformanceMetrics: "true"
      },
      fpEnabled: true,
      id: "tO448kWJw",
      position: {
        x: 300,
        y: 2160
      }
    },
    {
      name: "🔍 DeNiX Enhanced File Name Checker: Advanced Pattern Matching & Skip Processing",
      sourceRepo: "Community",
      pluginName: "checkFileNameIncludesDenix",
      version: "1.0.0",
      inputsDB: {
        skipMode: "true",
        showPerformanceMetrics: "true",
        terms: "[TDARR],TDARR,-TDARR"
      },
      fpEnabled: true,
      id: "GyukmFj-K",
      position: {
        x: 192,
        y: 144
      }
    },
    {
      name: "✏️ DeNiX Targeted Arr File Renamer: Single-File Rename Trigger",
      sourceRepo: "Community",
      pluginName: "ArrRenamer",
      version: "1.0.0",
      fpEnabled: true,
      id: "KXHJYRvdk",
      position: {
        x: 300,
        y: 2388
      }
    },
    {
      name: "🔍 DeNiX Smart Tag Checker: Multi-Instance *ARR Tag Detection",
      sourceRepo: "Community",
      pluginName: "ArrTagChecker",
      version: "1.0.0",
      fpEnabled: true,
      id: "XNwp95Ozc",
      position: {
        x: 228,
        y: 36
      }
    },
    {
      name: "🏷️ DeNiX Smart Tag Manager: Multi-Instance *ARR Tagging",
      sourceRepo: "Community",
      pluginName: "ArrTagger",
      version: "1.0.0",
      fpEnabled: true,
      id: "4MAEdTqTM",
      position: {
        x: 300,
        y: 2724
      }
    },
    {
      name: "🛡️ DeNiX File Mover: Native CLI Move Operations",
      sourceRepo: "Community",
      pluginName: "DenixMover",
      version: "1.0.0",
      inputsDB: {
        replaceInPlace: "true"
      },
      fpEnabled: true,
      id: "kYftzXE48",
      position: {
        x: 300,
        y: 1740
      }
    },
  ],
  flowEdges: [
    {
      source: "2Icv3GyQw",
      sourceHandle: "1",
      target: "HWmH1bWmr",
      targetHandle: null,
      id: "iW7z20yhs"
    },
    {
      source: "93yplJaV8",
      sourceHandle: "2",
      target: "-F6pXqrGq",
      targetHandle: null,
      id: "uDKE6TxXF"
    },
    {
      source: "93yplJaV8",
      sourceHandle: "1",
      target: "-F6pXqrGq",
      targetHandle: null,
      id: "AuvcQEKFx"
    },
    {
      source: "GP48wJhsI",
      sourceHandle: "2",
      target: "bu_B8tYn-",
      targetHandle: null,
      id: "ZlGXtoa9w"
    },
    {
      source: "GP48wJhsI",
      sourceHandle: "1",
      target: "bu_B8tYn-",
      targetHandle: null,
      id: "Npt8mRiqR"
    },
    {
      source: "0KxRrZfHC",
      sourceHandle: "2",
      target: "cGy3DI_j5",
      targetHandle: null,
      id: "Ax2wp1KyE"
    },
    {
      source: "0KxRrZfHC",
      sourceHandle: "1",
      target: "cGy3DI_j5",
      targetHandle: null,
      id: "wvcjSSHac"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "1",
      target: "93yplJaV8",
      targetHandle: null,
      id: "GgqNcl2JS"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "2",
      target: "93yplJaV8",
      targetHandle: null,
      id: "OHnLfnyob"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "6",
      target: "93yplJaV8",
      targetHandle: null,
      id: "N73DYBtyX"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "7",
      target: "93yplJaV8",
      targetHandle: null,
      id: "wuzVm9OLd"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "3",
      target: "GP48wJhsI",
      targetHandle: null,
      id: "0NfqIMs85"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "4",
      target: "GP48wJhsI",
      targetHandle: null,
      id: "JGNidzYB1"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "5",
      target: "GP48wJhsI",
      targetHandle: null,
      id: "A3Nsx24b9"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "8",
      target: "-nZwR4tIs",
      targetHandle: null,
      id: "N7Bj_4xvm"
    },
    {
      source: "-nZwR4tIs",
      sourceHandle: "2",
      target: "sz6z-Eu6S",
      targetHandle: null,
      id: "atyNZXlln"
    },
    {
      source: "-nZwR4tIs",
      sourceHandle: "1",
      target: "sz6z-Eu6S",
      targetHandle: null,
      id: "MWXz2HONn"
    },
    {
      source: "sz6z-Eu6S",
      sourceHandle: "1",
      target: "mqJ1MHeGv",
      targetHandle: null,
      id: "ek23cmosv"
    },
    {
      source: "dFoz1ZK4a",
      sourceHandle: "2",
      target: "nWZaPkmrt",
      targetHandle: null,
      id: "TroPFR8EW"
    },
    {
      source: "dFoz1ZK4a",
      sourceHandle: "1",
      target: "nWZaPkmrt",
      targetHandle: null,
      id: "8dZ9bFh3l"
    },
    {
      source: "nWZaPkmrt",
      sourceHandle: "2",
      target: "AEd17Ss03",
      targetHandle: null,
      id: "Xop9YXJcg"
    },
    {
      source: "-F6pXqrGq",
      sourceHandle: "1",
      target: "jER2rmW_i",
      targetHandle: null,
      id: "B2UHtPSCm"
    },
    {
      source: "nWZaPkmrt",
      sourceHandle: "1",
      target: "crWn6S-jF",
      targetHandle: null,
      id: "n_AWK0ymM"
    },
    {
      source: "jER2rmW_i",
      sourceHandle: "1",
      target: "crWn6S-jF",
      targetHandle: null,
      id: "wZa4FFmzU"
    },
    {
      source: "crWn6S-jF",
      sourceHandle: "2",
      target: "1ESoCNGEN",
      targetHandle: null,
      id: "1904Gvg77"
    },
    {
      source: "crWn6S-jF",
      sourceHandle: "1",
      target: "1ESoCNGEN",
      targetHandle: null,
      id: "C0UNNPvN5"
    },
    {
      source: "1ESoCNGEN",
      sourceHandle: "2",
      target: "_GgWavTHK",
      targetHandle: null,
      id: "tlJ5dA0Iu"
    },
    {
      source: "1ESoCNGEN",
      sourceHandle: "1",
      target: "_GgWavTHK",
      targetHandle: null,
      id: "DLLXIDKZk"
    },
    {
      source: "ql6i6lSEC",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "mZ27qUkEo"
    },
    {
      source: "ql6i6lSEC",
      sourceHandle: "2",
      target: "KDmzRrtYe",
      targetHandle: null,
      id: "i-eE3pTQ3"
    },
    {
      source: "ql6i6lSEC",
      sourceHandle: "1",
      target: "KDmzRrtYe",
      targetHandle: null,
      id: "8bGc2n2BM"
    },
    {
      source: "KDmzRrtYe",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "fdBNgZxtX"
    },
    {
      source: "tO448kWJw",
      sourceHandle: "2",
      target: "b8Bj3nlYk",
      targetHandle: null,
      id: "6twFnRD_q"
    },
    {
      source: "tO448kWJw",
      sourceHandle: "1",
      target: "b8Bj3nlYk",
      targetHandle: null,
      id: "IG5V0lQ51"
    },
    {
      source: "KDmzRrtYe",
      sourceHandle: "2",
      target: "Dpwk_jykk",
      targetHandle: null,
      id: "8r4XDhq0l"
    },
    {
      source: "KDmzRrtYe",
      sourceHandle: "1",
      target: "Dpwk_jykk",
      targetHandle: null,
      id: "LwHXLVAxy"
    },
    {
      source: "Dpwk_jykk",
      sourceHandle: "2",
      target: "tO448kWJw",
      targetHandle: null,
      id: "u4LuDF0Za"
    },
    {
      source: "Dpwk_jykk",
      sourceHandle: "1",
      target: "tO448kWJw",
      targetHandle: null,
      id: "5GL3NHZdC"
    },
    {
      source: "Dpwk_jykk",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "E25QgFSbA"
    },
    {
      source: "GyukmFj-K",
      sourceHandle: "1",
      target: "0KxRrZfHC",
      targetHandle: null,
      id: "pPMTWgJlJ"
    },
    {
      source: "GyukmFj-K",
      sourceHandle: "2",
      target: "US1u0INQJ",
      targetHandle: null,
      id: "gMYlYAqy8"
    },
    {
      source: "_GgWavTHK",
      sourceHandle: "2",
      target: "eMck2JUB2",
      targetHandle: null,
      id: "f5xSbEGMq"
    },
    {
      source: "_GgWavTHK",
      sourceHandle: "1",
      target: "eMck2JUB2",
      targetHandle: null,
      id: "PTW2mUoUF"
    },
    {
      source: "b8Bj3nlYk",
      sourceHandle: "2",
      target: "KXHJYRvdk",
      targetHandle: null,
      id: "_z55XKfEv"
    },
    {
      source: "b8Bj3nlYk",
      sourceHandle: "1",
      target: "KXHJYRvdk",
      targetHandle: null,
      id: "er1WFdkZy"
    },
    {
      source: "HWmH1bWmr",
      sourceHandle: "1",
      target: "XNwp95Ozc",
      targetHandle: null,
      id: "-0aSHkMF2"
    },
    {
      source: "XNwp95Ozc",
      sourceHandle: "2",
      target: "GyukmFj-K",
      targetHandle: null,
      id: "UVNG6n2S_"
    },
    {
      source: "XNwp95Ozc",
      sourceHandle: "1",
      target: "GyukmFj-K",
      targetHandle: null,
      id: "0QPT9P7Te"
    },
    {
      source: "4MAEdTqTM",
      sourceHandle: "2",
      target: "toewafx7j",
      targetHandle: null,
      id: "_4CGAKW5x"
    },
    {
      source: "4MAEdTqTM",
      sourceHandle: "1",
      target: "toewafx7j",
      targetHandle: null,
      id: "yi6-E06_2"
    },
    {
      source: "NQoQ3sCD6",
      sourceHandle: "2",
      target: "4MAEdTqTM",
      targetHandle: null,
      id: "MyXg0ILm0"
    },
    {
      source: "NQoQ3sCD6",
      sourceHandle: "1",
      target: "4MAEdTqTM",
      targetHandle: null,
      id: "iikkT8Cp8"
    },
    {
      source: "bu_B8tYn-",
      sourceHandle: "1",
      target: "dFoz1ZK4a",
      targetHandle: null,
      id: "QoE9DLrx7"
    },
    {
      source: "KXHJYRvdk",
      sourceHandle: "2",
      target: "FTCjHopiz",
      targetHandle: null,
      id: "RsvL1L8zu"
    },
    {
      source: "KXHJYRvdk",
      sourceHandle: "1",
      target: "FTCjHopiz",
      targetHandle: null,
      id: "_N39C65KQ"
    },
    {
      source: "FTCjHopiz",
      sourceHandle: "2",
      target: "NQoQ3sCD6",
      targetHandle: null,
      id: "uukCRNvuA"
    },
    {
      source: "FTCjHopiz",
      sourceHandle: "1",
      target: "NQoQ3sCD6",
      targetHandle: null,
      id: "H4bZinLH0"
    },
    {
      source: "tO448kWJw",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "NFrbnkQOx"
    },
    {
      source: "b8Bj3nlYk",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "0V03hIZ68"
    },
    {
      source: "FTCjHopiz",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "ANaSh8UfL"
    },
    {
      source: "KXHJYRvdk",
      sourceHandle: "5",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "DSHWmwNK6"
    },
    {
      source: "KXHJYRvdk",
      sourceHandle: "4",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "BtzFYQGls"
    },
    {
      source: "KXHJYRvdk",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "FjZ7Nz67C"
    },
    {
      source: "NQoQ3sCD6",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "TvoBePxHY"
    },
    {
      source: "4MAEdTqTM",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "UJtulihNt"
    },
    {
      source: "eMck2JUB2",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "Ypvgd9d2o"
    },
    {
      source: "_GgWavTHK",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "E1z-r_tjr"
    },
    {
      source: "1ESoCNGEN",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "vrxnKOP72"
    },
    {
      source: "crWn6S-jF",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "2QLGrsQOZ"
    },
    {
      source: "AEd17Ss03",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "NL9AXFPA3"
    },
    {
      source: "nWZaPkmrt",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "5gEbfoWwU"
    },
    {
      source: "mqJ1MHeGv",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "QCXhZ2mp2"
    },
    {
      source: "dFoz1ZK4a",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "taUueZsZU"
    },
    {
      source: "-F6pXqrGq",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "ZKiVO94AO"
    },
    {
      source: "bu_B8tYn-",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "BCXed_srj"
    },
    {
      source: "sz6z-Eu6S",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "c5lR6RY6S"
    },
    {
      source: "93yplJaV8",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "pSNrmeW4R"
    },
    {
      source: "GP48wJhsI",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "Vm5eab_ZR"
    },
    {
      source: "-nZwR4tIs",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "_iaTSKxiU"
    },
    {
      source: "cGy3DI_j5",
      sourceHandle: "9",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "cKwv1EXa3"
    },
    {
      source: "US1u0INQJ",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "rgipzjuQw"
    },
    {
      source: "0KxRrZfHC",
      sourceHandle: "5",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "hmn9HqffS"
    },
    {
      source: "0KxRrZfHC",
      sourceHandle: "4",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "_K4rdoGRr"
    },
    {
      source: "0KxRrZfHC",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "EvB7gmTcN"
    },
    {
      source: "XNwp95Ozc",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "kaTvM70T1"
    },
    {
      source: "mqJ1MHeGv",
      sourceHandle: "2",
      target: "OCJoQxnk4",
      targetHandle: null,
      id: "zrFtHIJpj"
    },
    {
      source: "mqJ1MHeGv",
      sourceHandle: "1",
      target: "OCJoQxnk4",
      targetHandle: null,
      id: "4A-EMvJO1"
    },
    {
      source: "OCJoQxnk4",
      sourceHandle: "2",
      target: "NosZpR5PC",
      targetHandle: null,
      id: "Bo4s7t1U5"
    },
    {
      source: "OCJoQxnk4",
      sourceHandle: "1",
      target: "crWn6S-jF",
      targetHandle: null,
      id: "w1F79aICe"
    },
    {
      source: "AEd17Ss03",
      sourceHandle: "1",
      target: "A_xw4g4K-",
      targetHandle: null,
      id: "1UyubyAh9"
    },
    {
      source: "NosZpR5PC",
      sourceHandle: "1",
      target: "A_xw4g4K-",
      targetHandle: null,
      id: "r08zWzhi3"
    },
    {
      source: "NosZpR5PC",
      sourceHandle: "2",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "GJ0ItySoQ"
    },
    {
      source: "OCJoQxnk4",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "PaslsVO-k"
    },
    {
      source: "A_xw4g4K-",
      sourceHandle: "2",
      target: "crWn6S-jF",
      targetHandle: null,
      id: "cT93PWCrg"
    },
    {
      source: "A_xw4g4K-",
      sourceHandle: "1",
      target: "crWn6S-jF",
      targetHandle: null,
      id: "CMr5NCuK7"
    },
    {
      source: "A_xw4g4K-",
      sourceHandle: "3",
      target: "N9OM4ev_c",
      targetHandle: null,
      id: "genDxyG8r"
    },
    {
      source: "eMck2JUB2",
      sourceHandle: "1",
      target: "kYftzXE48",
      targetHandle: null,
      id: "B-kQHKMzZ"
    },
    {
      source: "kYftzXE48",
      sourceHandle: "1",
      target: "ql6i6lSEC",
      targetHandle: null,
      id: "5Cor51kyl"
    },
  ]
}); };
exports.details = details;
