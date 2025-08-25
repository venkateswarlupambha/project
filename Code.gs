
function doGet(e) {
  // CORS for GET & preflight
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader("Access-Control-Allow-Origin", "*")
    .setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    .setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function doPost(e) {
  var allowedHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  // Handle preflight OPTIONS request
  // If there's no payload, just respond with CORS headers
  if (!e || !e.parameter || (e.postData && e.postData.length === 0)) {
    return ContentService.createTextOutput("")
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(allowedHeaders);
  }

  // Only process if required fields exist
  var name = e.parameter.name || '';
  var email = e.parameter.email || '';
  var mobile = e.parameter.phone || '';
  var service = e.parameter.service || '';
  var message = e.parameter.message || '';

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Sheet1');
    sheet.appendRow([name, email, mobile, service, message, '', '', '', '']);

    return ContentService.createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(allowedHeaders);
  } catch (err) {
    return ContentService.createTextOutput('Error: ' + err.message)
      .setMimeType(ContentService.MimeType.TEXT)
      .setHeaders(allowedHeaders);
  }
}
