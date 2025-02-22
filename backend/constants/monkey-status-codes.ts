type Status = {
  code: number;
  message: string;
};

type Statuses = {
  TEST_TOO_SHORT: Status;
  RESULT_HASH_INVALID: Status;
  RESULT_DATA_INVALID: Status;
  RESULT_SPACING_INVALID: Status;
  MISSING_KEY_DATA: Status;
  BOT_DETECTED: Status;
  GIT_GUD: Status;
};

export function getCodesRangeStart(): number {
  return 460;
}

const statuses: Statuses = {
  TEST_TOO_SHORT: {
    code: 460,
    message: "Test too short",
  },
  RESULT_HASH_INVALID: {
    code: 461,
    message: "Result hash invalid",
  },
  RESULT_SPACING_INVALID: {
    code: 462,
    message: "Result spacing invalid",
  },
  RESULT_DATA_INVALID: {
    code: 463,
    message: "Result data invalid",
  },
  MISSING_KEY_DATA: {
    code: 464,
    message: "Missing key data",
  },
  BOT_DETECTED: {
    code: 465,
    message: "Bot detected",
  },
  GIT_GUD: {
    code: 469,
    message: "Git gud scrub",
  },
};

export default statuses;
