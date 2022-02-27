'use strict';

// The redis key.
exports.redis = {
  // For LightHouse information, like region or source.
  SRS_TENCENT_LH: 'SRS_TENCENT_LH',
  // For tencent cloud products.
  SRS_TENCENT_CAM: 'SRS_TENCENT_CAM',
  SRS_TENCENT_COS: 'SRS_TENCENT_COS',
  SRS_TENCENT_VOD: 'SRS_TENCENT_VOD',
  // For cloud storage.
  SRS_DVR_PATTERNS: 'SRS_DVR_PATTERNS',
  SRS_DVR_M3U8_ACTIVE: 'SRS_DVR_M3U8_ACTIVE',
  SRS_DVR_M3U8_LOCAL: 'SRS_DVR_M3U8_LOCAL',
  SRS_DVR_M3U8_UPLOADED: 'SRS_DVR_M3U8_UPLOADED',
  SRS_DVR_M3U8_METADATA: 'SRS_DVR_M3U8_METADATA',
  // For cloud VoD.
  SRS_VOD_PATTERNS: 'SRS_VOD_PATTERNS',
  SRS_VOD_M3U8_ACTIVE: 'SRS_VOD_M3U8_ACTIVE',
  SRS_VOD_M3U8_LOCAL: 'SRS_VOD_M3U8_LOCAL',
  SRS_VOD_M3U8_UPLOADED: 'SRS_VOD_M3U8_UPLOADED',
  SRS_VOD_M3U8_METADATA: 'SRS_VOD_M3U8_METADATA',
  // The cos token and file information for cloud VoD, to upload files.
  SRS_VOD_COS_TOKEN: 'SRS_VOD_COS_TOKEN',
  // The publish secret.
  SRS_SECRET_PUBLISH: 'SRS_SECRET_PUBLISH',
  // The first boot flag.
  SRS_FIRST_BOOT: 'SRS_FIRST_BOOT',
};

