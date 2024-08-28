const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my API!' });
});

app.post('/api/echo', (req, res) => {
  res.json({ message: 'You sent:', data: req.body });
});

app.post('/api/v1/loan/limit-get', (req, res) => {
  try {
    const { aditionalDataPrivate } = req.body;
    const additionalData = JSON.parse(aditionalDataPrivate);

    if (additionalData.limitProduct === '6200' && additionalData.customerNo === '184047') {
      res.json({
        message: "success",
        data: {
          responseDescription: "Transaction Success",
          responseCode: "00",
          aditionalDataPrivate: "[{\"id\":\"184047.0006200.01\",\"name\":\"Wahyu Trisna Wijaya\",\"approvalDateStr\":\"20230217\",\"expiryDateStr\":\"20240502\",\"fixedVariable\":\"FIXED\",\"internalAmount\":\"200000000.00\",\"availableMaker\":\"Y\",\"noPkLimit\":\"0330/6200/052023\",\"noPkLimitEnd\":\"0330/6200/052023\",\"tglPkAwal\":\"20230502\",\"tglPkAkhir\":\"20230502\",\"lbuJenisGuna\":\"\",\"gurName\":\"\",\"gurLegalId\":\"\",\"gurNpwp\":\"\",\"gurStreet\":\"\",\"gurStreet2\":\"\",\"gurStreet3\":\"\",\"gurCity\":\"\",\"gurZipCode\":\"\",\"gurProvince\":\"\",\"jenisPejamin\":\"\",\"gurGolPenjamin\":\"\",\"gurBagianDijamin\":\"\",\"lbuPortfolio\":\"36\",\"lbuSifatKredit\":\"9\",\"lbuSektorEkonomi\":\"472009\",\"lbuKategoriPengukuran\":\"6\",\"lbuJenisPenggunaan\":\"1\",\"lbuOrientasiPenggunaan\":\"3\",\"lbuJenisKredit\":\"P99\",\"sidKategoriDebitur\":\"UK\",\"sidSifatKredit\":\"99\",\"sidJenisPengunaan\":\"25\",\"sidOrientasiPeggunaan\":\"1\",\"sidSektorEkonomi\":\"1131\",\"nilaiProyek\":\"\",\"sidLokasiProyek\":\"\",\"tglMacet\":\"\",\"sebabMacet\":\"\",\"ketSebabMacet\":\"\",\"tglRestruktur\":\"\",\"noRestruktur\":\"\",\"tglRestrukturAwal\":\"\",\"limitOrder\":\"0\",\"tglLoanStr\":\"20230502\",\"altLimitId\":\"\",\"maximumTotal\":\"200000000.00\",\"maximumSecured\":\"\",\"accountNo\":\"\",\"groupDebitur\":\"\",\"proposalDateStr\":\"20230217\",\"reviewFrequency\":\"20240502M1201\",\"offeredUntil\":\"20230217\",\"onlineLimitDateStr\":\"20230217\",\"cifMnemonic\":\"IR184047\",\"accMnemonicName\":\"\",\"collateralCode\":\"\",\"coBook\":\"ID0010002\",\"coCode\":\"\",\"segmentDebitur\":\"03\"}]",
        },
        status: true
      });
    } else {
      res.status(400).json({ error: 'Invalid Request Data' });
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid JSON in request body' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
