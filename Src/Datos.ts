export const Drive = (ID : string) => 
    `https://drive.google.com/thumbnail?id=${ID}&sz=w1000`

export const Img = {
    Noche  : Drive('1Wj4bbg-7ul70mQ6IWYAkEnRxAp80x8Ot'),
    Tokio  : Drive('1WpQso8WQgDOSeUvTQgv9-O1pAkBgR-x_'),
    Frio   : Drive('1wkxMPCMRQPquuwE1EQMaSsA8mB8T-BwW'),
    Monte  : Drive('1TAKWp3_ctW9-pGjD__A05fTOfJfdMjxc'),
    Castle : Drive('1HqBg2Nw5eM-T9vXuGOXz8bGRX3tcyhUO')
}

export const Galeria = {
    Etiqueta    : 'De la costa a la Montaña',
    Titulo      : 'Galeria',
    Descripcion : 'Una muestra de paisajes y lugares que Tokio tiene para ofrecer.',
    Fotos       : [
        '1Wj4bbg-7ul70mQ6IWYAkEnRxAp80x8Ot', '1cgIG1ORJ_RpmIppHwGtQq_z2IVbwA67l',
        '1WpQso8WQgDOSeUvTQgv9-O1pAkBgR-x_', '1e7SH3RfkumeCcnmE3EjHUDYkvp3mRgy9',
        '1VQS7bW2yy0QHXrsYh0TdnxTEdaBJrvgs', '1OXDms_fEFwRnrfUMbke9FMAmVKeHWPXN',
        '1_NDLuxNMSUAkKPj6pPgCz_tqG96UKqS_', '1HqBg2Nw5eM-T9vXuGOXz8bGRX3tcyhUO',
        '1i_3wgj9-QDuWiUf1hxIYUEEtuNsfSE7q', '1rr82TmlPxxjAZJS5i96Zx6M3m87bBtN2',
        '11l1GTFhsinL1DCLFDsgQ8SWTq4j6lCHA', '1nk0puafFRSA6a3Qm6EzgbbI31WYfHfJY'
    ].map((ID) => Drive(ID))
}