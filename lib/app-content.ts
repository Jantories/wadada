// Edit any text in the app from this file. All values below are empty placeholders.

export const profile = {
  greeting: 'สวัสดี',
  status: 'ONLINE',
  name: 'คุณ ญาณภัทร ชูบัวทอง',
  photo: '/images/card-photo.jpg',
}

export const unlockPin = '32353235'

export type CardSeal = {
  /** Circle centre, % of card width / height */
  x: number
  y: number
  /** Circle diameter, % of card width */
  size: number
  /** Direction (deg) the rainbow band travels across this circle */
  angle: number
}

export const card = {
  titleTh: 'บัตรประจำตัวประชาชน',
  titleEn: 'Thai National ID Card',
  numberLabelTh: 'เลขประจำตัวประชาชน',
  numberLabelEn: 'Identification Number',
  number: '1 9098 03394 93 2',
  fullNameLabel: 'ชื่อตัวและชื่อสกุล',
  fullNameTh: 'น.ส. ญาณภัทร ชูบัวทอง',
  firstNameLabel: 'Name',
  firstNameEn: 'Miss Yanapat',
  lastNameLabel: 'Last Name',
  lastNameEn: 'Choobuathong',
  birthLabelTh: 'เกิดวันที่',
  birthTh: '30 ธ.ค. 2548',
  birthLabelEn: 'Date of Birth',
  birthEn: '30 Dec. 2005',
  address: 'ที่อยู่ 1 ซ.19/3 คลองเตย ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา',
  issueTh: '28 มี.ค. 2567',
  issueLabelTh: 'วันออกบัตร',
  issueEn: '28 Mar. 2024',
  issueLabelEn: 'Date of Issue',
  expiryTh: '29 ธ.ค. 2575',
  expiryLabelTh: 'วันบัตรหมดอายุ',
  expiryEn: '29 Dec. 2032',
  expiryLabelEn: 'Date of Expiry',
  photoCode: '9098-03-03281440',
  backTitle: 'ด้านหลังบัตร',
  backNote: 'แตะที่ข้อความเพื่อแก้ไข หรือกดปุ่มด้านล่างเพื่อพลิกบัตร',
  expandLabel: 'ขยายรูปบัตร',
  collapseLabel: 'ย่อรูปบัตร',
  infoLabel: 'ข้อมูลบัตร',
  seals: [
    { x: 24.7, y: 28.8, size: 17, angle: 28 },
    { x: 50.5, y: 19, size: 17.4, angle: -18 },
    { x: 80.2, y: 19.3, size: 17.4, angle: 22 },
    { x: 68.6, y: 46.8, size: 17.6, angle: -30 },
    { x: 45.2, y: 70.6, size: 16.5, angle: 16 },
  ] as CardSeal[],
  front: { small: '/images/card-front-small.webp', large: '/images/card-front-large.webp' },
  back: { small: '/images/card-back-small.webp', large: '/images/card-back-large.webp' },
}

export const sections = {
  services: 'เมนูบริการ',
  announcements: 'ประกาศทั้งหมด',
  seeAll: 'ทั้งหมด',
}

export const services = [
  { id: 'check', label: 'ตรวจสอบคำขอ', disabled: false },
  { id: 'certify', label: 'การรับรองเอกสาร', disabled: false },
  { id: 'move', label: 'การแจ้งย้ายที่อยู่', disabled: false },
  { id: 'soon', label: 'เร็วๆ นี้', disabled: true },
] as const

export const banners = [
  { src: '/images/banner-memorial.png', title: 'สถิตอยู่ในใจตราบนิรันดร์', bleed: null },
  {
    src: '/images/banner-registration.png',
    title: 'บริการทะเบียนออนไลน์',
    // Placement (% of the 4:1 banner box) that maps the artwork's blue panel onto the box so the cards poke out above it
    bleed: { left: -0.254, top: -17.03, width: 100.38, height: 118.13 },
  },
] as { src: string; title: string; bleed: { left: number; top: number; width: number; height: number } | null }[]

export const announcements = [
  {
    title: 'เชิญชวนผู้มีสิทธิเลือกตั้ง/ประชามติ ไปใช้สิทธิ',
    date: '6/02/2569',
    body: 'กรมการปกครองขอเชิญชวนผู้มีสิทธิเลือกตั้ง ส.ส. และออกเสียงประชามติ ไปใช้สิทธิ ในวันอาทิตย์ที่ 8 กุมภาพันธ์ พ.ศ. 2569 เวลา 8.00 - 17.00 น.',
  },
  {
    title: 'แจ้งเตือน!! ระวัง SMS หลอกลวง',
    date: '23/07/2566',
    body: 'กรมการปกครอง ไม่มีนโยบายในการส่งข้อความ SMS ไปยังประชาชนแต่อย่างใด โดยขอประชาสัมพันธ์ ห้ามกดลิงก์ที่แนบมากับข้อความที่ไม่น่าเชื่อถือ',
  },
  {
    title: 'BORA WEB PORTAL',
    date: '13/05/2566',
    body: 'ระบบการให้บริการงานทะเบียนออนไลน์ ผ่านเว็บไซต์ https://thportal.bora.dopa.go.th โดยยืนยันตัวตนผ่านแอปพลิเคชัน ThaID',
  },
  {
    title: 'ระบบให้บริการประชาชนด้วย ThaID',
    date: '26/04/2566',
    body: 'รวมช่องทาง ระบบที่ให้บริการประชาชนที่เข้าสู่ระบบด้วย แอป ThaID ได้ที่ https://www.bora.dopa.go.th/thaid_authen_services/',
  },
  {
    title: 'ชื่อแอปพลิเคชันใหม่ ThaID',
    date: '14/03/2566',
    body: 'ยกระดับการให้บริการผ่านการพัฒนาระบบพิสูจน์และยืนยันตัวตนทางดิจิทัล จาก "D.DOPA" เป็น "ThaID" รองรับประชาชนคนไทยและชาวต่างชาติ',
  },
  {
    title: 'กรณีลืมรหัสผ่าน',
    date: '20/01/2566',
    body: 'หากลืมรหัสผ่าน สามารถสร้างรหัสผ่านใหม่ได้ โดยถ่ายรูปภาพใบหน้าตนเอง หากตรวจสอบแล้วเป็นเจ้าของไอดีจริง จะสามารถตั้งรหัสผ่านใหม่ได้',
  },
]

export const appName = 'MyApp'

export const notificationsPage = {
  title: 'แจ้งเตือนทั้งหมด',
  emptyTitle: 'ไม่มีการแจ้งเตือน',
  emptySub: 'ยังไม่มี การแจ้งเตือนใด ๆ',
}

export const logoutDialog = {
  title: 'แจ้งเตือน',
  message: 'คุณต้องการออกจากระบบใช่หรือไม่?',
  confirm: 'ใช่',
  cancel: 'ไม่',
}

export const cardInfo = {
  title: 'ข้อมูลบัตร',
  photoTitle: 'รูปหน้าบัตร',
  photoSub: 'รูปหน้าบัตรประจำตัวประชาชน',
  photo: '/images/card-photo.jpg',
  numberLabel: 'เลขประจำตัวประชาชน',
  number: '1-9098-03394-93-2',
  nameTh: 'น.ส. ญาณภัทร ชูบัวทอง',
  nameEn: 'Miss Yanapat  Choobuathong',
  addressLabel: 'ที่อยู่',
  address: '1 ซ.19/3 คลองเตย ต.คอหงส์ อ.หาดใหญ่ จ.สงขลา',
  birthLabel: 'เกิดวันที่',
  birth: '30 ธ.ค. 2548',
  issueLabel: 'วันที่ออกบัตร',
  issue: '28 มี.ค. 2567',
  expiryLabel: 'วันที่หมดอายุ',
  expiry: '29 ธ.ค. 2575',
}

export const chat = {
  title: 'แชทบอท',
  badge: 'Bot',
  greeting: 'สวัสดีครับ/ค่ะ ยินดีต้อนรับสู่ระบบให้บริกา���อัตโนมัติ เราพร้อมให้ความช่วยเหลือและตอบข้อสงสัยของท่าน',
  reply: 'ขอบคุณสำหรับข้อ��วาม เจ้าหน้า���ี่จะติดต่อกลับโดยเร็วที่สุด',
  placeholder: 'พิมพ์ข้อความ...',
}

export const documentsPage = {
  title: 'เอกสาร',
  heading: 'รวมเอกสารที่เกี่ยวข้อง',
  sub: 'แสดงรายการเอกสารทั้งหมด',
  // tone: blue | green | red
  groups: [
    [{ id: 'idcard', title: 'บัตรประจำตัว', sub: 'บัตรประจำตัว', tone: 'blue' }],
    [
      { id: 'house', title: 'ทะเบียนบ้าน', sub: 'ข้อมูลทะเบียนบ้าน', tone: 'green' },
      { id: 'birth', title: 'สูติบัตร', sub: 'ข้อมูลการเกิด สถานที่เกิด บิดา มารดา', tone: 'green' },
    ],
    [
      { id: 'marriage', title: 'ทะเบียนสมรส', sub: 'ทะเบียนการสมรส', tone: 'red' },
      { id: 'divorce', title: 'ทะเบียนหย่า', sub: 'ทะเบียนการหย่า', tone: 'red' },
    ],
    [{ id: 'disability', title: 'บัตรประจำตัวคนพิการ', sub: 'บัตรประจำตัวคนพิการ', tone: 'blue' }],
    [
      { id: 'license', title: 'ใบอนุญาต', sub: 'รายการใบอนุญาตต่าง ๆ', tone: 'blue' },
      { id: 'other', title: 'เอกสารอื่น ๆ', sub: 'เอกสารเพิ่มเติม', tone: 'blue' },
    ],
  ],
} as const

export const historyPage = {
  title: 'ประวัติการทำรายการ',
  groups: [
    {
      date: '12 ตุลาคม พ.ศ. 2569',
      items: [
        { title: 'ยืนยันตัวตน', status: 'ยินยอม', body: 'ยืนยันตัวตนแพลตฟอร์ม App 01 มีการร้องขอให้ท่านยืนยันตัวตน' },
        { title: 'ยืนยันตัวตน', status: 'ยินยอม', body: 'แพลตฟอร์ม App 02 มีการร้องขอให้ท่านยืนยันตัวตน' },
      ],
    },
    {
      date: '1 กันยายน พ.ศ. 2569',
      items: [
        { title: 'ยืนยันตัวตน', status: 'ยินยอม', body: 'ระบบตัวอย่าง มีการร้องขอให้ท่านยืนยันตัวตน' },
        { title: 'ยืนยันตัวตน', status: 'ยินยอม', body: 'ระบบตัวอย่าง มีการร้องขอให้ท่านยืนยันตัวตน' },
      ],
    },
    {
      date: '15 กรกฎาคม พ.ศ. 2569',
      items: [{ title: 'ยืนยันตัวตน', status: 'ยินยอม', body: 'ระบบตัวอย่าง มีการร้องขอให้ท่านยืนยันตัวตน' }],
    },
  ],
}

export const settingsPage = {
  title: 'การตั้งค่า',
  heading: 'ปรับแต่งฟังก์ชันของแอปพลิเคชัน',
  sub: 'จัดการรหัสผ่าน การเข้าถึง ปรับแต่งสิทธิ์',
  changePin: { title: 'เปลี่ยนรหัสผ่าน', sub: 'เปลี่ยนรหัสผ่านในรูปแบบ PIN' },
  biometric: { title: 'ใช้งานด้วยอัตลักษณ์บุคคล', sub: 'การเข้าถึงด้วยอัตลักษณ์ เช่น ลายนิ้วมือ ใบหน้า' },
  notifications: { title: 'การแจ้งเตือน', sub: `รายละเอียดอื่น ๆ ของ แอปพลิเคชัน ${appName}` },
  registration: { title: 'ประวัติการลงทะเบียน', sub: 'ประวัติการลงทะเบียนในอุปกรณ์ที่ผ่านมา' },
  about: { title: 'เกี่ยวกับ', sub: 'เวอร์ชัน 1.0.0 (100001)' },
  moveDevice: { title: 'ย้ายอุปกรณ์', sub: 'แสดง QR Code สำหรับย้ายไปยังอุปกรณ์ใหม่' },
  trust: { title: 'จัดการ Trust Application', sub: 'ให้สิทธิการเข้าถึงโดยไม่ยืนยันตัวตนเพิ่มเติม' },
  deactivate: { title: 'ยกเลิกการใช้งาน', sub: `ยกเลิกการใช้งาน แอปพลิเคชัน ${appName}` },
  logout: { title: 'ออกจากระบบ', sub: 'ออกจากระบบบนอุปกรณ์นี้' },
}

export const nav = {
  home: 'หน้าหลัก',
  docs: 'เอกสาร',
  scan: 'สแกน',
  history: 'ประวัติ',
  settings: 'ตั้งค่า',
}
