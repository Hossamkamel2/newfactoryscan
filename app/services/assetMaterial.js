import client from "./client";

const pairLoad = (data) =>
  client.post("encoder/api/pairing/pairElements", data);

const assetdetail = (qr) =>
  client.get(`encoder/api/pairing/GetAssetDetails/${qr}`);

const pairMaterialToWarehouse = (materialcode, warehouseCode, CI, CO) =>
  client.get(`encoder/api/pairing/pairmaterialtoWarehouse`, {
    materialcode,
    warehouseCode,
    CI,
    CO,
  });
const pairMaterialToMachine = (materialcode, machineCode) =>
  client.get(`encoder/api/pairing/pairmaterialtoMachine`, {
    materialcode,
    machineCode,
  });

const materialDetail = (barcode, qrcode) =>
  client.get(`encoder/api/pairing/GetMaterialDetails/${barcode}/${qrcode}`);

const childprint = (uid, quantity) =>
  client.get(`encoder/api/pairing/ChildPrint/${uid}/${quantity}`);

const machinePrint = (name) =>
  client.get(`encoder/api/pairing/MachinePrint/${name}`);

const dryerStatus = (name) =>
  client.get(`encoder/api/pairing/DryerStatus/${name}`);

export default {
  pairLoad,
  assetdetail,
  materialDetail,
  pairMaterialToWarehouse,
  pairMaterialToMachine,
  machinePrint,
  dryerStatus,
  childprint,
};
