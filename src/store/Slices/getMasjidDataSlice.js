import {createSlice} from '@reduxjs/toolkit';
const state = [
  {
    location: {
      latitude: 24.9136329,
      longitude: 67.12863349999999,
    },
    _id: '669a52f848004cbbd4dfb587',
    name: 'Khalid Bin Waleed Masjid',
    address: 'W47H+FF2, Karachi, Karachi City',
    placeId: 'ChIJeUJlIeM4sz4RSkMN9gsl_KU',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb588',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.8849954,
      longitude: 67.13997549999999,
    },
    _id: '669a52f848004cbbd4dfb589',
    name: 'Hamza Masjid',
    address: 'Pakistan',
    placeId: 'ChIJlW8zxXU5sz4R_bu8yLxk-d4',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb58a',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.8867433,
      longitude: 67.1504389,
    },
    _id: '669a52f848004cbbd4dfb58b',
    name: 'Jamia Masjid Dar ul Uloom Imam e Azam Abu Hanifa۔ جامع مسجد دارلعلوم امام اعظم ابو حنیفہ',
    address:
      'V5P2+M5W, Shahrah-e-Faisal, Shah Faisal Colony, Malir Halt, Moria Khan Goth Shah Faisal Colony, Karachi',
    placeId: 'ChIJhy0-d5k5sz4RXocH0pKVJcA',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb58c',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9406434,
      longitude: 67.1464464,
    },
    _id: '669a52f848004cbbd4dfb58d',
    name: 'Masjid Hasan Ibn-e-Ali',
    address:
      'W4RW+7H4, Old Raavian Co-Operative Housing Society, Main University Road, Old Ravians Housing Society Gulzar E Hijri Scheme 33, Karachi',
    placeId: 'ChIJYzxbJGE4sz4RIHrMxOy-wBE',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb58e',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9143574,
      longitude: 67.1502235,
    },
    _id: '669a52f848004cbbd4dfb58f',
    name: 'Masjid Masoomeen O Imambargah Asgharia',
    address: 'D3 Road, Bhitaiabad Block 9 Bhittaiabad, Karachi',
    placeId: 'ChIJodyf_FI4sz4RLltC7q_s2m8',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb590',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9194243,
      longitude: 67.13197819999999,
    },
    _id: '669a52f848004cbbd4dfb591',
    name: 'Quran Institute Gulistan e Jauhar (QIJ)',
    address:
      'Quran Institute Jauhar, Masjid Jamia Ul Quran, Block 14 Gulistan-e-Johar, Karachi',
    placeId: 'ChIJq9V3Hfs4sz4RqycVGgT39F0',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb592',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9161429,
      longitude: 67.1376617,
    },
    _id: '669a52f848004cbbd4dfb593',
    name: 'Jamia Masjid Akhtar',
    address:
      'Nazd Sindh Bloch Society Gait Nu, 2 C-96, Block 12 Gulistan-e-Johar, Karachi',
    placeId: 'ChIJaYbuwf44sz4Rwz8SKhgL-2k',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb594',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9124198,
      longitude: 67.119239,
    },
    _id: '669a52f848004cbbd4dfb595',
    name: 'Masjid e Naheed',
    address:
      'Shop # 9, Naveed Bungalows, Block 17 Block 17 Gulistan-e-Johar, Karachi',
    placeId: 'ChIJDceDjeA4sz4RN5gmJqx0Myw',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb596',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9265981,
      longitude: 67.10612689999999,
    },
    _id: '669a52f848004cbbd4dfb597',
    name: 'Jamia Masjid Taqwa',
    address: 'ST 9, Block 7 Gulshan-e-Iqbal, Karachi',
    placeId: 'ChIJde_d08c4sz4RsvZ5q0rA9kU',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb598',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9411484,
      longitude: 67.1146086,
    },
    _id: '669a52f848004cbbd4dfb599',
    name: 'IBA Campus Prayer Hall',
    address: 'W4R7+FR5, University Of Karachi, Karachi',
    placeId: 'ChIJV3tN17w4sz4R4isxrtKGrcQ',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb59a',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9211644,
      longitude: 67.0996722,
    },
    _id: '669a52f848004cbbd4dfb59b',
    name: 'Jamia Sattaria Islamia',
    address: 'W3CX+FV7, Block 6 Block 6 Gulshan-e-Iqbal, Karachi',
    placeId: 'ChIJR3dUnc44sz4RV1QmYlHkESU',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb59c',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.885288,
      longitude: 67.1377516,
    },
    _id: '669a52f848004cbbd4dfb59d',
    name: 'Jamia Masjid Qasmia Ferozia',
    address:
      'V4PQ+446, Natha Khan Goth Natha Khan Goth Shah Faisal Colony, Karachi',
    placeId: 'ChIJB4ukOHQ5sz4RiQfyaXuJoGY',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb59e',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.8846152,
      longitude: 67.1452426,
    },
    _id: '669a52f848004cbbd4dfb59f',
    name: 'Faizan e Jamal e Mustafa Masjid',
    address: 'V4MW+R3X, Shah Faisal Colony 1 Shah Faisal Colony, Karachi',
    placeId: 'ChIJ48f0Lpw5sz4R7CWZsOl9kJs',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5a0',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9516131,
      longitude: 67.1099894,
    },
    _id: '669a52f848004cbbd4dfb5a1',
    name: 'Madarsah Ibrahim-ul-Islamia',
    address: 'X425+JXX, Malik CHS Gulzar E Hijri Scheme 33, Karachi',
    placeId: 'ChIJD32aZac4sz4RXmqoP24m_Cw',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5a2',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9517517,
      longitude: 67.1098244,
    },
    _id: '669a52f848004cbbd4dfb5a3',
    name: 'Jamia Masjid Madni',
    address:
      'Sector 16/A, Malik Co-Operative Housing Society Malik CHS Gulzar E Hijri Scheme 33, Karachi',
    placeId: 'ChIJtbbEZKc4sz4RqlnT6zXLepk',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5a4',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9559748,
      longitude: 67.1157384,
    },
    _id: '669a52f848004cbbd4dfb5a5',
    name: 'جامع مسجد فیضانِ سعید کاظمی ر ح',
    address:
      'X448+97Q, Gulshan-e-Kaneez Fatima Gulshan e Kaneez Fatima Gulzar E Hijri Scheme 33, Karachi',
    placeId: 'ChIJN4Krsl9Hsz4RvqT7lFScJPg',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5a6',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.92104529999999,
      longitude: 67.09011079999999,
    },
    _id: '669a52f848004cbbd4dfb5a7',
    name: 'Madni Masjid',
    address: '105-F Khalid Bin Walid Road, Block 5 Gulshan-e-Iqbal, Karachi',
    placeId: 'ChIJSbQtdjQ_sz4RHtEBhn8ZVZs',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5a8',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.8850195,
      longitude: 67.15723249999999,
    },
    _id: '669a52f848004cbbd4dfb5a9',
    name: 'Jamia Mustafai Masjid۔ جامع مصطفائ مسجد',
    address:
      'V5P4+2V5, near faisalabad bakery, Peoples Colony Shah Faisal Shah Faisal Colony, Karachi',
    placeId: 'ChIJoyrtG5E5sz4Rb2SEGNOsiJ8',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5aa',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9582367,
      longitude: 67.1152244,
    },
    _id: '669a52f848004cbbd4dfb5ab',
    name: 'Masjid Hussain Bin Ali',
    address:
      'X458+73X, Hijri Road, Merchant Navy Officers CHS Gulzar E Hijri Scheme 33, Karachi',
    placeId: 'ChIJ9YD92F1Hsz4RyMAEZW6mBPo',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5ac',
    },
    __v: 0,
  },
  {
    location: {
      latitude: 24.9199519,
      longitude: 67.08725439999999,
    },
    _id: '669a52f848004cbbd4dfb5ad',
    name: 'Quranlecturer.com',
    address:
      'House No A-1 Block 5 Gulshan-e-Iqbal, Block 5 Gulshan-e-Iqbal, Karachi',
    placeId: 'ChIJJT-h1So_sz4R3N6XydADMhk',
    prayerTimings: {
      fajr: '04:30',
      dhuhr: '12:30',
      asr: '15:30',
      maghrib: '18:30',
      isha: '20:00',
      _id: '669a52f848004cbbd4dfb5ae',
    },
    __v: 0,
  },
];
const getMasjidData = createSlice({
  name: 'Masjid Data',
  initialState: state,
  //   reducers: {
  //     increment: (state) => {
  //       state.value += 1;
  //     },
  //     decrement: (state) => {
  //       state.value -= 1;
  //     },
  //     incrementByAmount: (state, action) => {
  //       state.value += action.payload;
  //     },
  //   },
});

// export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default getMasjidData.reducer;
