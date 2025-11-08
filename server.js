const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 서빙 (빌드된 React 앱)
app.use(express.static(path.join(__dirname, 'build')));

// 모든 경로를 index.html로 리다이렉트 (SPA 라우팅)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

