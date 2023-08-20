import { BASE_END_POINT } from '../setting';

export const API_UPDATE_CARD_INFO = {
  // 申込情報取得API
  END_POINT: `${BASE_END_POINT}/bff/cs/NWEB018`,
  /**
   * @param {Object} payload
   * @param {string} payload.policyId
   * @param {string} payload.cardToken
   *
   */
  getRequestBody: (payload) => {
    const { policyId, cardToken } = payload;
    return {
      policyId: policyId,
      cardInfo: {
        cardToken: cardToken,
      },
    };
  },
};
