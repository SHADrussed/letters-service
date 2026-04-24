import { TEST_ERROR } from "../src/config/api";

export function mockSendFeedback(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("MOCK DATA:", data);

      if (TEST_ERROR) {
        return reject(new Error("Mock error"));
      }

      resolve({ success: true });
    }, 1000); // имитация сети
  });
}
