import BaseSource from "../src/sources/base";

global.SpreadsheetApp = {
    openById: () => ({
        getSheetByName: () => ({
            getRange: () => ({
                getValue: () => "VERDADERO",
                getValues: () => ([["key"],[""]]),
                setValue: (value) => value,
                setValues: (values) => values,
            }),
            appendRow: () => {},
        }),
    }),
};

var mockProperties = {
    ssId: "",
    exchangeUrl: "",
    telegramUserIds: "15123",
    telegramUrl: "",
    webAppUrl: "",
    telegramToken: "",
}

global.SETTINGS = {
    getProperty: (key) => mockProperties[key],
};

global.UrlFetchApp = {
    fetch: () => ({
        getContentText: () => '{"USD": {"promedio": 24.95},"COL": {"compra": 174},"USDCOL": {"ratetrm": 4640}}',
    }),
};

export default class MockedBaseSource extends BaseSource {
    sendMessage(text) {
    }
}