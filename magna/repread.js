function fileExtensionValidation(fileName, type) {
  // Get the file extension from the file name
  var fileExtension = fileName.split('.').pop();

  // Compare the file extension with the specified type or list of allowed extensions
  if (fileExtension === type) {
    // File extension is valid
    return true;
  } else {
    // File extension is not valid
    return false;
  }
}
