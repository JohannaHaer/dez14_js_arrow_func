let me = (vorname, nachname, geburtsort, wohnort, alter) => {
    let surname = `${vorname}`
    let lastname = `${nachname}`
    let birthplace = `${geburtsort}`
    let age = `${alter}`
    let residence = `${wohnort}`
    console.log(`Hi, mein Name ist ${surname} ${lastname}. Ich bin in ${birthplace} geboren, lebe in ${residence} und bin ${age} alt`);
}

me(`Johanna`, `'Sowieso'`, `'geht dich nichts an'`, `'sonstwo'`, `'älter als du denkst'`)