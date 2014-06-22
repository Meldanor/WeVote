function IsNumeric(input) {
    return (input - 0) == input && (''+input).replace(/^\s+|\s+$/g, "").length > 0;
};