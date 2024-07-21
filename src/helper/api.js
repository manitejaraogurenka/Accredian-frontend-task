import axios from "axios";

export const submitReferral = async (data) => {
  try {
    const response = await axios.post(
      "https://accredian-backend-api-p2uk.onrender.com/api/referral",
      data
    );
    return response;
  } catch (error) {
    throw new Error("Error submitting referral: " + error.message);
  }
};
