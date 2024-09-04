require('dotenv').config();
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: 'You sent:', data: req.body });
});

/**
 * LOAN LIMIT
 */
app.post('/api/v1/loan/limit-get', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);

    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: ""
      },
      status: true
    };

    if (additionalData.limitProduct === '6200' && additionalData.customerNo === '184047') {
      //Single
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"184047.0006200.01\",\"name\":\"Wahyu Trisna Wijaya\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR184047\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6400' && additionalData.customerNo === '194868') {
      //Tesuto 6400
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"194868.0006400.01\",\"name\":\"Tesuto Tesuto Tesuto\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6400/052023\",\"noPkLimitEnd\":\"0330/6400/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194868\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6200' && additionalData.customerNo === '194868') {
      //Tesuto 6200
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"194868.0006200.01\",\"name\":\"Tesuto Tesuto Tesuto\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6400/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194868\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6200' && additionalData.customerNo === '194955') {
      //Zig
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"194955.0006200.01\",\"name\":\"Zag Zig Zug\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR194955\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6200' && additionalData.customerNo === '195767') {
      // 1 data
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"195767.0006200.01\",\"name\":\"USERGDAB\",\"approvalDateStr\":\"20240613\",\"expiryDateStr\":\"20250613\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"100000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00103/ML/PINTAR/0624\",\"noPkLimitEnd\":\"00103/ML/PINTAR/0624\",\"tglPkAwal\":\"20240613\",\"tglPkAkhir\":\"20240613\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"100000000.00\",\"sidLokasiProyek\":\"0392\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240613\",\"altLimitId\":\"\",\"maximumTotal\":\"100000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240613\",\"reviewFrequency\":\"20250613M1201\",\"offeredUntil\":\"20240613\",\"onlineLimitDateStr\":\"20240613\",\"cifMnemonic\":\"US195767\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6400' && additionalData.customerNo === '195767') {
      // 1 data
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"195767.0006400.03\",\"name\":\"USERGDAB\",\"approvalDateStr\":\"20240806\",\"expiryDateStr\":\"20241106\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00038/ML/PRAKTIS/0724\",\"noPkLimitEnd\":\"00038/ML/PRAKTIS/0724\",\"tglPkAwal\":\"20240806\",\"tglPkAkhir\":\"20240806\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0392\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240806\",\"altLimitId\":\"\",\"maximumTotal\":\"0\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240806\",\"reviewFrequency\":\"20241106M0301\",\"offeredUntil\":\"20240806\",\"onlineLimitDateStr\":\"20240806\",\"cifMnemonic\":\"US195767\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"\"}]";
    } else if (additionalData.limitProduct === '6400' && additionalData.customerNo === '196107') {
      // 2 data
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"196107.0006400.02\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20240623\",\"expiryDateStr\":\"20240923\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00113/ML/PRAKTIS/0624\",\"noPkLimitEnd\":\"00113/ML/PRAKTIS/0624\",\"tglPkAwal\":\"20240623\",\"tglPkAkhir\":\"20240623\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240623\",\"altLimitId\":\"\",\"maximumTotal\":\"0\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240623\",\"reviewFrequency\":\"20240923M0301\",\"offeredUntil\":\"20240623\",\"onlineLimitDateStr\":\"20240623\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"\"},{\"id\":\"196107.0006400.03\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20241108\",\"expiryDateStr\":\"20250208\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"1000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"test/pk/2024/08\",\"noPkLimitEnd\":\"test/pk/2024/08\",\"tglPkAwal\":\"20241108\",\"tglPkAkhir\":\"20241108\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"1000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20241108\",\"altLimitId\":\"\",\"maximumTotal\":\"669977.88\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20241108\",\"reviewFrequency\":\"20250208M0301\",\"offeredUntil\":\"20241108\",\"onlineLimitDateStr\":\"20241108\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else if (additionalData.limitProduct === '6200' && additionalData.customerNo === '196107') {
      // 1 data
      responseSuccess.data.aditionalDataPrivate = "[{\"id\":\"196107.0006200.01\",\"name\":\"MIRA SETIAWAN\",\"approvalDateStr\":\"20240523\",\"expiryDateStr\":\"20250523\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"2000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"00053/6200/0624\",\"noPkLimitEnd\":\"00053/6200/0624\",\"tglPkAwal\":\"20240523\",\"tglPkAkhir\":\"20240523\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UM\",\"sidSifatKredit\":\"\",\"sidJenisPengunaan\":\"\",\"sidOrientasiPeggunaan\":\"\",\"sidSektorEkonomi\":\"\",\"nilaiProyek\":\"2000000.00\",\"sidLokasiProyek\":\"0396\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"1\",\"tglLoanStr\":\"20240523\",\"altLimitId\":\"\",\"maximumTotal\":\"2000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20240523\",\"reviewFrequency\":\"20250523M1201\",\"offeredUntil\":\"20240523\",\"onlineLimitDateStr\":\"20240523\",\"cifMnemonic\":\"MI196107\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]";
    } else {
      res.status(404).json({
        message: "DATA NOT FOUND"
      });
    }

    res.json(responseSuccess);
  } catch (error) {
    res.status(400).json({ error: 'Invalid JSON in request body' });
  }
});

/**
 * LOAN INQUIRY
 */
app.post('/api/v1/inquiry-loan', (req, res) => {
  try {
    const { aditionalDataPrivate, fromAccount } = req.body;

    // Prepare the response
    const responseSuccess = {
      message: 'success',
      data: {
        responseDescription: 'Transaction Success',
        responseCode: '00',
        aditionalDataPrivate: ""
      },
      status: true
    };

    if (aditionalDataPrivate === "184047         0000" && fromAccount === "184047") {
      responseSuccess.data.aditionalDataPrivate = "194868         0001LD2404464849       IDR00001000000000002420240213202602132024051300006000000091671249130000004169271331001937762         21069  6400.01   MERCHLIN  CUR        000000416927133ID0010002   ";
    } else if (aditionalDataPrivate === "194868         0000" && fromAccount === "194868") {
      // Single Data Tesuto
      responseSuccess.data.aditionalDataPrivate = "194868         0001LD2404464849       IDR00001000000000002420240213202602132024051300006000000091671249130000004169271331001937762         21069  6400.01   MERCHLIN  CUR        000000416927133ID0010002   ";
    } else if (aditionalDataPrivate === "194955         0000" && fromAccount === "194955") {
      // Multiple Data
      responseSuccess.data.aditionalDataPrivate = "194955         0011LD2431300309       IDR00000010000000005W20241108202412132024121301300000000001000000000000000012500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431301781       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431302107       IDR00000010000000006W20241108202412202024122001300000000001000000000000000015000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431306047       IDR00000100000000000320241108202502082024120801200000000010000000000000003400221121001938688         21069  6400.01   MERCHLIN  CUR        000000340022112ID0010002   LD2431307079       IDR00000010000000001W20241108202411152024111501300000000000997425000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431317297       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431331860       IDR00000010000000002W20241108202411222024112201300000000001000000000000000005000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431341070       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431349026       IDR00000010000000001W20241108202411152024111501300000000001007500000000000002500001001938688         21069  6200.01   MERCHLD   LIQ  PDO   000000000000000ID0010002   LD2431360149       IDR00000010000000003W20241108202411292024112901300000000001000000000000000007500001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   LD2431373330       IDR00000010000000004W20241108202412062024120601300000000001000000000000000010000001001938688         21069  6200.01   MERCHLD   CUR        000000000000000ID0010002   "
    } else if (aditionalDataPrivate === "195767         0000" && fromAccount === "195767") {
      responseSuccess.data.aditionalDataPrivate = "ACK"
    } else {
      return res.status(404).json({
        message: "DATA NOT FOUND"
      })
    }

    // Send the response
    res.json(responseSuccess);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(400).json({ error: 'Invalid request data' });
  }
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
