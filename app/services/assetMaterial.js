import client from "./client";

const pairLoad = (data) =>
  client.post("encoder/api/pairing/pairElements", data);

const assetdetail = (qr) =>
  client.get(`encoder/api/pairing/GetAssetDetails/${qr}`);

const materialDetail = (barcode, qrcode) =>
  client.get(`encoder/api/pairing/GetMaterialDetails/${barcode}/${qrcode}`);

export default {
  pairLoad,
  assetdetail,
  materialDetail,
};
