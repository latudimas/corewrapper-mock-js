require('dotenv').config();
import express, { json } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());

let data = [
  {
    "cif": "194868",
    "loanData": "194868         0001LD2404464849       IDR00001000000000002420240213202602132024051300006000000091671249130000004169271331001937762         21069  6400.01   MERCHLIN  CUR        000000416927133ID0010002   ",
    "limitPintar": "[{\"id\":\"194868.0006200.01\",\"name\":\"Tesuto Tesuto Tesuto\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6400/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194868\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "limitPraktis": "[{\"id\":\"194868.0006400.01\",\"name\":\"Tesuto Tesuto Tesuto\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6400/052023\",\"noPkLimitEnd\":\"0330/6400/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194868\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "nasabahData": "",
    "loanReport": ""
  },
  {
    "cif": "184047",
    "loanData": "194868         0001LD2404464849       IDR00001000000000002420240213202602132024051300006000000091671249130000004169271331001937762         21069  6400.01   MERCHLIN  CUR        000000416927133ID0010002   ",
    "limitPintar": "[{\"id\":\"184047.0006200.01\",\"name\":\"Wahyu Trisna Wijaya\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR184047\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "limitPraktis": "",
    "nasabahData": "",
    "loanReport": ""
  },
  {
    "cif": "194955",
    "loanData": "194955         0011LD2431300309       IDR00000010000000005W20241108202412132024121301300000000001000000000000000012500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431301781       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431302107       IDR00000010000000006W20241108202412202024122001300000000001000000000000000015000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431306047       IDR00000100000000000320241108202502082024120801200000000010000000000000003400221121001938688         21069  6400.01   MERCHLIN  CUR        000000340022112ID0010002   LD2431307079       IDR00000010000000001W20241108202411152024111501300000000000997425000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431317297       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431331860       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431341070       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431349026       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431360149       IDR00000010000000003W20241108202411292024112901300000000001000000000000000007500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431373330       IDR00000010000000004W20241108202412062024120601300000000001000000000000000010000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   ",
    "limitPintar": "[{\"id\":\"194955.0006200.01\",\"name\":\"Zag Zig Zug\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194955\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "limitPraktis": "",
    "nasabahData": "",
    "loanReport": ""
  },
  {
    "cif": "195767",
    "loanData": "",
    "limitPintar": "[{\"id\":\"195767.0006200.01\",\"name\":\"USERGDAB\",\"approvalDateStr\":\"20240613\",\"expiryDateStr\":\"20250613\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"100000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00103/ML/PINTAR/0624\",\"noPkLimitEnd\":\"00103/ML/PINTAR/0624\",\"tglPkAwal\":\"20240613\",\"tglPkAkhir\":\"20240613\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"100000000.00\",\"sidLokasiProyek\":\"0392\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240613\",\"altLimitId\":\"\",\"maximumTotal\":\"100000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240613\",\"reviewFrequency\":\"20250613M1201\",\"offeredUntil\":\"20240613\",\"onlineLimitDateStr\":\"20240613\",\"cifMnemonic\":\"US195767\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "limitPraktis": "[{\"id\":\"195767.0006400.03\",\"name\":\"USERGDAB\",\"approvalDateStr\":\"20240806\",\"expiryDateStr\":\"20241106\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00038/ML/PRAKTIS/0724\",\"noPkLimitEnd\":\"00038/ML/PRAKTIS/0724\",\"tglPkAwal\":\"20240806\",\"tglPkAkhir\":\"20240806\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0392\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240806\",\"altLimitId\":\"\",\"maximumTotal\":\"0\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240806\",\"reviewFrequency\":\"20241106M0301\",\"offeredUntil\":\"20240806\",\"onlineLimitDateStr\":\"20240806\",\"cifMnemonic\":\"US195767\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"\"}]",
    "nasabahData": "",
    "loanReport": ""
  },
  {
    "cif": "196107",
    "loanData": "",
    "limitPintar": "[{\"id\":\"196107.0006200.01\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20240523\",\"expiryDateStr\":\"20250523\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"2000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00053/6200/0624\",\"noPkLimitEnd\":\"00053/6200/0624\",\"tglPkAwal\":\"20240523\",\"tglPkAkhir\":\"20240523\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"2000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240523\",\"altLimitId\":\"\",\"maximumTotal\":\"2000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240523\",\"reviewFrequency\":\"20250523M1201\",\"offeredUntil\":\"20240523\",\"onlineLimitDateStr\":\"20240523\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "limitPraktis": "[{\"id\":\"196107.0006400.02\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20240623\",\"expiryDateStr\":\"20240923\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00113/ML/PRAKTIS/0624\",\"noPkLimitEnd\":\"00113/ML/PRAKTIS/0624\",\"tglPkAwal\":\"20240623\",\"tglPkAkhir\":\"20240623\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240623\",\"altLimitId\":\"\",\"maximumTotal\":\"0\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240623\",\"reviewFrequency\":\"20240923M0301\",\"offeredUntil\":\"20240623\",\"onlineLimitDateStr\":\"20240623\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"\"},{\"id\":\"196107.0006400.03\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20241108\",\"expiryDateStr\":\"20250208\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"test/pk/2024/08\",\"noPkLimitEnd\":\"test/pk/2024/08\",\"tglPkAwal\":\"20241108\",\"tglPkAkhir\":\"20241108\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20241108\",\"altLimitId\":\"\",\"maximumTotal\":\"669977.88\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20241108\",\"reviewFrequency\":\"20250208M0301\",\"offeredUntil\":\"20241108\",\"onlineLimitDateStr\":\"20241108\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
    "nasabahData": "",
    "loanReport": ""
  }
];

let historyData = [
  {
    "loanNo": "LD2414136151",
    "historyData": "[{\"valueDate\":\"20240121\",\"description\":\"DIS\",\"debit\":\"100000000\",\"credit\":\"0\",\"ldBalance\":\"100000000\",\"interest\":\"0\",\"charge\":\"0\",\"tax\":\"0\",\"transactionDate\":\"20240220\",\"pdDescription\":\"-\",\"pdDebit\":\"0\",\"pdCredit\":\"0\",\"pdInterest\":\"0\",\"pdCharges\":\"0\",\"pePs\":\"0\",\"interestTax\":\"0\",\"pdTaxAmt\":\"0\",\"totalOs\":\"100000000\",\"maturityDate\":\"20240221\"}]",
  }
]

// Helper methods for filtering data by cif
const matchesCif = searchCif => item => item.cif === searchCif;
const searchByCif = (data, cif) => data.filter(matchesCif(cif));

// Helper methods for filtering data by ldNo, LOAN REPORT ONLY
const matchesLoanNo = loanNo => item => item.loanNo === loanNo;
const searchByLoanNo = (historyData, loanNo) => historyData.filter(matchesLoanNo(loanNo));

/**
  * LOAN LIMIT
  * example of payload request
  *  {
  *    "aditionalDataPrivate": "{\"limitProduct\" : \"6400\", \"customerNo\": \"184047\"}" 
  *  }
  */
app.post('/api/v1/loan/limit-get', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);
    const productCode = additionalData.limitProduct;
    const cif = additionalData.customerNo;

    const returnData = searchByCif(data, cif);

    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: productCode === '6200' ? returnData.limitPintar : returnData.limitPraktis
      },
      status: true
    };

    console.info(`Success processing limit inquiry request with cif ${customerNo} and limitProduct ${limitProduct}`)
    res.json(responseSuccess);

  } catch (error) {
    console.error(`Success processing limit inquiry request with cif${customerNo} and limitProduct ${limitProduct} with error ${error}`);
    res.status(400).json({ error: 'Invalid JSON in request body' });
  }
});

/**
  * LOAN INQUIRY
  * example of payload request
  * {
  *    "aditionalDataPrivate": "194955         0000",
  *    "fromAccount": "194955"
  * }
  */
app.post('/api/v1/inquiry-loan', (req, res) => {
  try {
    const { aditionalDataPrivate, fromAccount } = req.body;
    const cif = fromAccount;

    const returnData = searchByCif(data, cif);

    //  the response
    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: returnData.loanData
      },
      status: true
    };

    console.info(`Success processing loan inquiry request with cif ${fromAccount}`)
    res.json(responseSuccess);

  } catch (error) {
    console.error(`Success processing loan inquiry request with  cif ${fromAccount} with error ${error}`);
    res.status(400).json({ error: 'Invalid request data' });
  }
});

/**
  * INQUIRY NASABAH
  * Example payload request
  *  {
  *    "aditionalDataPrivate": "{\"cifNo\" : \"184208\"}" 
  *  }
  */
app.post('api/v1/inquiry/nasabah', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);
    const cif = additionalData.cifNo;

    const returnData = searchByCif(data, cif);

    //  the response
    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: returnData.nasabahData
      },
      status: true
    };

    console.info(`Success processing inquiry nasabah request with cif ${cif}`)
    res.json(responseSuccess);

  } catch (error) {
    console.error(`Success processing inquiry nasabah request with cif ${cif} error ${error}`);
    res.status(400).json({ error: 'Invalid request data' });
  }
});

/**
  * LOAN REPORT
  * This one use historyData instead of data
  *  {
  *    "aditionalDataPrivate": "{\"ldNo\" : \"LD2414136151\"}" 
  *  }
  */
app.post('api/v1/loan/report', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);
    const loanNo = additionalData.ldNo;

    const returnData = searchByLoanNo(historyData, loanNo);

    //  the response
    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        correlationId: "",
        responseCode: '00',
        aditionalDataPrivate: returnData.historyData
      },
      status: true
    };

    console.info(`Success processing inquiry loan report request with cif ${fromAccount}`)
    res.json(responseSuccess);

  } catch (error) {
    console.error(`Success processing inquiry loan report request with  cif ${fromAccount} error ${error}`);
    res.status(400).json({ error: 'Invalid request data' });
  }
});

/**
  * UPDATE VALUE
  * Custom endpoint to update the value of the data
  */

// Endpoint to update data
app.put('/update-data', (req, res) => {
  const { cif, field, value } = req.body;

  if (!cif || !field || value === undefined) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const itemIndex = data.findIndex(item => item.cif === cif);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'CIF not found' });
  }

  if (!data[itemIndex].hasOwnProperty(field)) {
    return res.status(400).json({ error: 'Invalid field' });
  }

  // Update the field
  data[itemIndex][field] = value;

  res.json({
    message: 'Data updated successfully',
    updatedData: data[itemIndex]
  });
});

// FOR PAUSING INSTANCE
// app.post('/api/pause-cw', async (req, res) => {
//   const projectId = process.env.PROJECT_ID;
//   const vercelToken = process.env.VERCEL_TOKEN;
//   const route = `${projectId}/pause?`;
//
//   try {
//     const response = await fetch(`https://api.vercel.com/v1/projects/${route}`, {
//       method: `POST`,
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${vercelToken}`,
//       },
//     });
//
//     if (response.ok) {
//       res.status(200).json({ message: "Corewrapper mock service successfully paused" });
//     } else {
//       res.status(response.status).json({ message: "Corewrapper mock service successfully paused" });
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ message: 'Internal server error' })
//   }
//
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
