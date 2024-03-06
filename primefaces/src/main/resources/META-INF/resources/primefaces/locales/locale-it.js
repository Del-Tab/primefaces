if (window.PrimeFaces) {
  /** Italian (from PrimeLocale)*/
  PrimeFaces.locales["it"] = {
    accept: "Si",
    addRule: "Aggiungi regola",
    am: "AM",
    apply: "Applica",
    cancel: "Annulla",
    choose: "Scegli",
    chooseDate: "Seleziona Data",
    chooseMonth: "Seleziona Mese",
    chooseYear: "Seleziona Anno",
    clear: "Cancella tutto",
    completed: "Completato",
    contains: "Contiene",
    custom: "Personalizzato",
    dateAfter: "La data è successiva",
    dateBefore: "La data è precedente",
    dateFormat: "dd/mm/yy",
    dateIs: "La data è",
    dateIsNot: "La data non è",
    dayNames: ["Domenica", "Lunedi", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    emptyFilterMessage: "Nessuna opzione disponibile",
    emptyMessage: "Nessun risultato trovato",
    emptySearchMessage: "Nessun risultato trovato",
    emptySelectionMessage: "Nessun elemento selezionato",
    endsWith: "Finisce con",
    equals: "Equivale",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    filter: "Filtro",
    firstDayOfWeek: 1,
    gt: "Maggiore di",
    gte: "Maggiore o uguale a",
    lt: "Minore di",
    lte: "Minore o uguale a",
    matchAll: "Abbina tutto",
    matchAny: "Abbina alcuni",
    medium: "Medio",
    monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    nextDecade: "Decade successiva",
    nextHour: "Ora successiva",
    nextMinute: "Minuto successivo",
    nextMonth: "Mese successivo",
    nextSecond: "Secondo successivo",
    nextYear: "Anno successivo",
    noFilter: "Senza Filtro",
    notContains: "Non contiene",
    notEquals: "Non uguale",
    now: "Ora attuale",
    passwordPrompt: "Inserisci la password",
    pending: "In corso",
    pm: "PM",
    prevDecade: "Decade precedente",
    prevHour: "Ora precedente",
    prevMinute: "Minuto precedente",
    prevMonth: "Mese precedente",
    prevSecond: "Secondo precedente",
    prevYear: "Anno precedente",
    reject: "No",
    removeRule: "Rimuovi regola",
    searchMessage: "{0} risultati disponibili",
    selectionMessage: "{0} elementi selezionati",
    showMonthAfterYear: false,
    startsWith: "Inizia con",
    strong: "Forte",
    today: "Oggi",
    upload: "Carica",
    weak: "Debole",
    weekHeader: "Sett",
    aria: {
      cancelEdit: "Annulla modifica",
      close: "Chiudi",
      collapseLabel: "Riduci",
      collapseRow: "Riduci riga",
      editRow: "Modifica riga",
      expandLabel: "Espandi",
      expandRow: "Espandi riga",
      falseLabel: "Falso",
      filterConstraint: "Costante di filtro",
      filterOperator: "Operatore di filtro",
      firstPageLabel: "Prima pagina",
      gridView: "Griglia",
      hideFilterMenu: "Nascondi Menu filtri",
      jumpToPageDropdownLabel: "Vai alla Dropdown delle pagine",
      jumpToPageInputLabel: "Vai all'Input delle pagine",
      lastPageLabel: "Ultima pagina",
      listView: "Lista",
      moveAllToSource: "Muovi tutto alla sorgente",
      moveAllToTarget: "Muovi tutto all'elemento",
      moveBottom: "Vai in fondo",
      moveDown: "Vai sotto",
      moveTop: "Vai in cima",
      moveToSource: "Vai alla sorgente",
      moveToTarget: "Vai all'elemento",
      moveUp: "Vai sopra",
      navigation: "Naviga",
      next: "Successivo",
      nextPageLabel: "Pagina successiva",
      nullLabel: "Non selezionato",
      otpLabel: "Inserisci il carattere della password monouso {0}",
      pageLabel: "Pagina {page}",
      passwordHide: "Nascondi password",
      passwordShow: "Mostra password",
      previous: "Precedente",
      previousPageLabel: "Pagina precedente",
      rotateLeft: "Ruota a sinistra",
      rotateRight: "Ruota a destra",
      rowsPerPageLabel: "Elementi per pagina",
      saveEdit: "Salva modifica",
      scrollTop: "Torna sù",
      selectAll: "Seleziona tutti gli elementi",
      selectLabel: "Seleziona",
      selectRow: "Seleziona riga",
      showFilterMenu: "Mostra Menu filtri",
      slide: "Scorri",
      slideNumber: "{slideNumber}",
      star: "1 stella",
      stars: "{star} stelle",
      trueLabel: "Vero",
      unselectAll: "Deseleziona tutti gli elementi",
      unselectLabel: "Deseleziona",
      unselectRow: "Deseleziona riga",
      zoomImage: "Zoom Immagine",
      zoomIn: "Ingrandisci",
      zoomOut: "Riduci",
    },
  };

  // custom PF labels
  PrimeFaces.locales["it"] = $.extend(true, {}, PrimeFaces.locales["it"], {
    weekNumberTitle: "S",
    isRTL: false,
    yearSuffix: "",
    timeOnlyTitle: "Solo orario",
    timeText: "Orario",
    hourText: "Ore",
    minuteText: "Minuti",
    secondText: "Secondi",
    millisecondText: "Millisecondi",
    year: "Anno",
    month: "Mese",
    week: "Settimana",
    day: "Giorno",
    list: "Agenda",
    allDayText: "Tutto il giorno",
    moreLinkText: "Altro...",
    noEventsText: "Nessun evento",
    aria: {
      "datatable.sort.ASC": "attiva per ordinare la colonna in senso crescente",
      "datatable.sort.DESC": "attiva per ordinare la colonna in senso descrescente",
      "colorpicker.OPEN": "Apri il selettore di colore",
      "colorpicker.CLOSE": "Chiudi il selettore di colore",
      "colorpicker.CLEAR": "Cancella il colore selezionato",
      "colorpicker.MARKER": "Saturazione: {s}. Luminosità: {v}.",
      "colorpicker.HUESLIDER": "Cursore tonalità",
      "colorpicker.ALPHASLIDER": "Cursore opacità",
      "colorpicker.INPUT": "Campo valore colore",
      "colorpicker.FORMAT": "Formato colore",
      "colorpicker.SWATCH": "Campione colore",
      "colorpicker.INSTRUCTION": "Selettore di saturazione e luminosità. Utilizzare i tasti freccia su, giù, sinistra e destra per selezionare.",
      "spinner.INCREASE": "Incremento del valore",
      "spinner.DECREASE": "Diminuzione del valore",
      "switch.ON": "Su",
      "switch.OFF": "Spento",
      "messages.ERROR": "Errore",
      "messages.FATAL": "Fatale",
      "messages.INFO": "Informazione",
      "messages.WARN": "Attenzione",
    },
    messages: {
      //optional for Client Side Validation
      "javax.faces.component.UIInput.REQUIRED": "{0}: Errore di validazione: Valore obbligatorio.",
      "javax.faces.converter.IntegerConverter.INTEGER": "{2}: '{0}' dev'essere un numero costituito da uno o più cifre.",
      "javax.faces.converter.IntegerConverter.INTEGER_detail": "{2}: '{0}' dev'essere un numero compreso tra -2147483648 e 2147483647. Esempio: {1}.",
      "javax.faces.converter.DoubleConverter.DOUBLE": "{2}: '{0}' dev'essere un numero costituito da uno o più cifre.",
      "javax.faces.converter.DoubleConverter.DOUBLE_detail": "{2}: '{0}' dev'essere un numero compreso tra 4.9E-324 e 1.7976931348623157E308. Esempio: {1}.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL": "{2}: '{0}' dev'essere un numero decimale con segno.",
      "javax.faces.converter.BigDecimalConverter.DECIMAL_detail": "{2}: '{0}' dev'essere un numero decimale con segno costituito da zero o più cifre, eventualmente seguito dalla virgola e da una parte frazionaria. Esempio: {1}.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER": "{2}: '{0}' dev'essere un numero costituito da una o più cifre.",
      "javax.faces.converter.BigIntegerConverter.BIGINTEGER_detail": "{2}: '{0}' dev'essere un numero costituito da una o più cifre. Esempio: {1}.",
      "javax.faces.converter.ByteConverter.BYTE": "{2}: '{0}' dev'essere un numero compreso tra 0 e 255.",
      "javax.faces.converter.ByteConverter.BYTE_detail": "{2}: '{0}' dev'essere un numero compreso tra 0 e 255. Esempio: {1}.",
      "javax.faces.converter.CharacterConverter.CHARACTER": "{1}: '{0}' dev'essere un carattere valido.",
      "javax.faces.converter.CharacterConverter.CHARACTER_detail": "{1}: '{0}' dev'essere un carattere ASCII.",
      "javax.faces.converter.ShortConverter.SHORT": "{2}: '{0}' dev'essere un numero costituito da una o più cifre.",
      "javax.faces.converter.ShortConverter.SHORT_detail": "{2}: '{0}' dev'essere un numero compreso tra -32768 e 32767. Esempio: {1}.",
      "javax.faces.converter.BooleanConverter.BOOLEAN": "{1}: '{0}' dev'essere 'vero' o 'falso'.",
      "javax.faces.converter.BooleanConverter.BOOLEAN_detail": "{1}: '{0}' dev'essere 'vero' o 'falso'. Qualunque altro valore diverso da 'vero' verrà valutato come 'falso'.",
      "javax.faces.validator.LongRangeValidator.MAXIMUM": "{1}: Errore di validazione: Il valore è maggiore del massimo valore consentito di '{0}'.",
      "javax.faces.validator.LongRangeValidator.MINIMUM": "{1}: Errore di validazione: Il valore è minore del minimo valore consentito di '{0}'.",
      "javax.faces.validator.LongRangeValidator.NOT_IN_RANGE": "{2}: Errore di validazione: Il valore specificato non è compreso nell'intervallo previsto tra {0} e {1}.",
      "javax.faces.validator.LongRangeValidator.TYPE": "{0}: Errore di validazione: Il valore non è del tipo corretto.",
      "javax.faces.validator.DoubleRangeValidator.MAXIMUM": "{1}: Errore di validazione: Il valore è maggiore del massimo consentito di '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.MINIMUM": "{1}: Errore di validazione: Il valore è minore del minimo consentito di '{0}'.",
      "javax.faces.validator.DoubleRangeValidator.NOT_IN_RANGE": "{2}: Errore di validazione: Il valore specificato non è compreso nell'intervallo previsto tra {0} e {1}.",
      "javax.faces.validator.DoubleRangeValidator.TYPE": "{0}: Errore di validazione: Il valore non è del tipo corretto.",
      "javax.faces.converter.FloatConverter.FLOAT": "{2}: '{0}' dev'essere un numero costituito da una o più cifre.",
      "javax.faces.converter.FloatConverter.FLOAT_detail": "{2}: '{0}' dev'essere un numero compreso tra 1.4E-45 e 3.4028235E38. Esempio: {1}.",
      "javax.faces.converter.DateTimeConverter.DATE": "{2}: non è stato possibile interpretare '{0}' come una data.",
      "javax.faces.converter.DateTimeConverter.DATE_detail": "{2}: non è stato possibile interpretare '{0}' come una data. Esempio: {1}.",
      "javax.faces.converter.DateTimeConverter.TIME": "{2}: non è stato possibile interpretare '{0}' come un orario.",
      "javax.faces.converter.DateTimeConverter.TIME_detail": "{2}: non è stato possibile interpretare '{0}' come un orario. Esempio: {1}.",
      "javax.faces.converter.DateTimeConverter.DATETIME": "{2}: non è stato possibile interpretare '{0}' come una data ed un orario.",
      "javax.faces.converter.DateTimeConverter.DATETIME_detail": "{2}: non è stato possibile interpretare '{0}' come una data ed un orario. Esempio: {1}.",
      "javax.faces.converter.DateTimeConverter.PATTERN_TYPE": "{1}: Almeno uno degli attributi 'pattern' o 'type' dev'essere specificato per convertire il valore '{0}'.",
      "javax.faces.converter.NumberConverter.CURRENCY": "{2}: non è stato possibile interpretare '{0}' come un valore monetario.",
      "javax.faces.converter.NumberConverter.CURRENCY_detail": "{2}: non è stato possibile interpretare '{0}' come un valore monetario. Esempio: {1}.",
      "javax.faces.converter.NumberConverter.PERCENT": "{2}: non è stato possibile interpretare '{0}' come una percentuale.",
      "javax.faces.converter.NumberConverter.PERCENT_detail": "{2}: non è stato possibile interpretare '{0}' come una percentuale. Esempio: {1}.",
      "javax.faces.converter.NumberConverter.NUMBER": "{2}: non è stato possibile interpretare '{0}' come un numero.",
      "javax.faces.converter.NumberConverter.NUMBER_detail": "{2}: non è stato possibile interpretare '{0}' come un numero. Esempio: {1}.",
      "javax.faces.converter.NumberConverter.PATTERN": "{2}: non è stato possibile interpretare '{0}' come un pattern numerico.",
      "javax.faces.converter.NumberConverter.PATTERN_detail": "{2}: non è stato possibile interpretare '{0}' come un pattern numerico. Esempio: {1}.",
      "javax.faces.validator.LengthValidator.MINIMUM": "{1}: Errore di validazione: La lunghezza è minore del minimo consentito di '{0}'.",
      "javax.faces.validator.LengthValidator.MAXIMUM": "{1}: Validation Error: La lunghezza è maggiore del massimo consentito di '{0}'.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET": "L'espressione regolare dev'essere impostata.",
      "javax.faces.validator.RegexValidator.PATTERN_NOT_SET_detail": "Il pattern di espressione regolare dev'essere impostato ad un valore non vuoto.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED": "Mancata corrispondenza dell'espressione regolare.",
      "javax.faces.validator.RegexValidator.NOT_MATCHED_detail": "L'espressione regolare '{0}' non è stata soddisfatta.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION": "Errore nell'espressione regolare.",
      "javax.faces.validator.RegexValidator.MATCH_EXCEPTION_detail": "Errore nell'espressione regolare, '{0}'.",
      "primefaces.FileValidator.FILE_LIMIT": "Numero massimo di file superato.",
      "primefaces.FileValidator.FILE_LIMIT_detail": "Numero massimo: {0}.",
      "primefaces.FileValidator.ALLOW_TYPES": "Tipo di file non valido.",
      "primefaces.FileValidator.ALLOW_TYPES_detail": "Tipo di file non valido: '{0}'. Tipi consentiti: '{1}'.",
      "primefaces.FileValidator.SIZE_LIMIT": "Dimensione file non valida.",
      "primefaces.FileValidator.SIZE_LIMIT_detail": "Il file '{0}' non deve essere più grande di {1}.",
      //optional for bean validation integration in client side validation
      "javax.faces.validator.BeanValidator.MESSAGE": "{0}",
      "javax.validation.constraints.AssertFalse.message": "dev'essere falso.",
      "javax.validation.constraints.AssertTrue.message": "dev'essere vero.",
      "javax.validation.constraints.DecimalMax.message": "dev'essere minore o uguale a {0}.",
      "javax.validation.constraints.DecimalMin.message": "dev'essere maggiore o uguale a {0}.",
      "javax.validation.constraints.Digits.message": "valore numerico fuori intervallo (numero di cifre previste compreso tra {0} e {1}).",
      "javax.validation.constraints.Future.message": "dev'essere nel futuro.",
      "javax.validation.constraints.Max.message": "dev'essere minore o uguale a {0}.",
      "javax.validation.constraints.Min.message": "dev'essere maggiore o uguale a {0}.",
      "javax.validation.constraints.NotNull.message": "non può essere nullo.",
      "javax.validation.constraints.Null.message": "dev'essere nullo.",
      "javax.validation.constraints.Past.message": "dev'essere nel passato.",
      "javax.validation.constraints.Pattern.message": 'deve soddisfare l\'espressione "{0}".',
      "javax.validation.constraints.Size.message": "la dimensione dev'essere compresa tra {0} e {1}.",
    },
  });
}
