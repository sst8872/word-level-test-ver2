function getSheetsLength(sheetApiUrl, callback) {
    document.querySelector('.loader').style.display = 'block';
    let appUrl = sheetApiUrl;

    fetch(appUrl)
        .then(res => res.json())
        .then(callback);
}

export default getSheetsLength;

