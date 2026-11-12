// 🌐 ຟັງຊັນກວດສອບພາສາປັດຈຸບັນຈາກ URL (ຕົວຢ່າງ: ?lang=vn, ?lang=th, ?lang=en) ຫຼື localStorage
function getCurrentLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem("app_lang") || 'lo'; 
}

// 💬 ຂໍ້ຄວາມແຈ້ງເຕືອນ (Alert & Confirm) ແຍກຕາມພາສາ
const uiMessages = {
    lo: {
        confirmDeleteNews: "ລົບຂ່າວນີ້ແທ້ບໍ?",
        successDeleteNews: "ລົບຂ່າວ ແລະ ການແຈ້ງເຕືອນທີ່ກ່ຽວຂ້ອງສຳເລັດ!",
        confirmDeleteReport: "ລົບລາຍງານນີ້ແທ້ບໍ?",
        selectRoomAlert: "ກະລຸນາເລືອກຫ້ອງພັກກ່ອນ!",
        loginSuccess: "🎉 ເຂົ້າສູ່ລະບົບສຳເລັດ!"
    },
    vn: {
        confirmDeleteNews: "Bạn có chắc chắn muốn xóa tin tức này không?",
        successDeleteNews: "Đã xóa tin tức và thông báo liên quan thành công!",
        confirmDeleteReport: "Bạn có chắc chắn muốn xóa báo cáo này không?",
        selectRoomAlert: "Vui lòng chọn phòng trước!",
        loginSuccess: "🎉 Đăng nhập thành công!"
    },
    th: {
        confirmDeleteNews: "คุณแน่ใจหรือไม่ว่าต้องการลบข่าวนี้?",
        successDeleteNews: "ลบข่าวและการแจ้งเตือนที่เกี่ยวข้องสำเร็จ!",
        confirmDeleteReport: "คุณแน่ใจหรือไม่ว่าต้องการลบรายงานนี้?",
        selectRoomAlert: "กรุณาเลือกห้องพักก่อน!",
        loginSuccess: "🎉 เข้าสู่ระบบสำเร็จ!"
    },
    en: {
        confirmDeleteNews: "Are you sure you want to delete this news?",
        successDeleteNews: "News and related notifications deleted successfully!",
        confirmDeleteReport: "Are you sure you want to delete this report?",
        selectRoomAlert: "Please select a room first!",
        loginSuccess: "🎉 Login successful!"
    },
    ch: {
        confirmDeleteNews: "您确定要删除这条新闻吗？",
        successDeleteNews: "新闻及相关通知已成功删除！",
        confirmDeleteReport: "您确定要删除此报告吗？",
        selectRoomAlert: "请先选择房间！",
        loginSuccess: "🎉 登录成功！"
    },
    kr: {
        confirmDeleteNews: "이 뉴스를 정말 삭제하시겠습니까?",
        successDeleteNews: "뉴스 및 관련 알림이 성공적으로 삭제되었습니다!",
        confirmDeleteReport: "이 보고서를 정말 삭제하시겠습니까?",
        selectRoomAlert: "먼저 방을 선택해 주세요!",
        loginSuccess: "🎉 로그인 성공!"
    }
};

// ດຶງຂໍ້ຄວາມຕາມພາສາທີ່ກຳລັງເປີດຢູ່
function getMessage(key) {
    const lang = getCurrentLanguage();
    return (uiMessages[lang] && uiMessages[lang][key]) ? uiMessages[lang][key] : uiMessages['lo'][key];
}

//⚙️ ຟັງຊັນຊ່ວຍດຶງຄຳສັບ ແລະ ຈັດການພາສາ
function getCurrentLang() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') || localStorage.getItem("app_lang") || "lo";
}

function t(key) {
    const lang = getCurrentLang();
    return translations[lang] ? translations[lang][key] || translations['lo'][key] || key : key;
}

window.changeAppLanguage = function(lang) {
    localStorage.setItem("app_lang", lang);
    const url = new URL(window.location);
    url.searchParams.set('lang', lang);
    window.location.href = url.toString();
};

// 🕒 ຟັງຊັນອັບເດດ Live Clock ຕາມພາສາ
function updateLiveClock() { 
    const clockElement = document.getElementById('live-clock'); 
    if (!clockElement) return; 
    const now = new Date(); 

    const lang = getCurrentLang();
    let localeMap = {
        'lo': 'lo-LA',
        'th': 'th-TH',
        'vn': 'vi-VN',
        'en': 'en-US',
        'ch': 'zh-CN',
        'kr': 'ko-KR'
    };
    let currentLocale = localeMap[lang] || 'lo-LA';

    clockElement.innerText = now.toLocaleDateString(currentLocale, { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
    }); 
}
function formatRoomName(rawRoom, lang) {
    if (!rawRoom) return "";
    // ດຶງສະເພາະຕົວເລກຫ້ອງອອກມາ (ເຊັ່ນ "110" ຈາກ "ຫ້ອງ 110")
    const match = rawRoom.toString().match(/\d+/);
    const roomNum = match ? match[0] : rawRoom;
    
    if (roomNum) {
        // ตรวจสอบภาษาปัจจุบัน (ถ้าไม่มีให้ใช้ 'la' เป็นค่าเริ่มต้น)
        const currentLanguage = lang || (typeof currentLang !== 'undefined' ? currentLang : 'la');
        
        // กำหนดคำว่า "ห้อง" ในแต่ละภาษาโดยตรง เพื่อความแม่นยำสูงสุด
        const roomPrefixes = {
            la: "ຫ້ອງ",
            vn: "Phòng",
            en: "Room",
            th: "ห้อง",
            ch: "房间",
            kr: "방"
        };
        
        const roomPrefix = roomPrefixes[currentLanguage] || roomPrefixes['la'] || "ຫ້ອງ";
        return `${roomPrefix} ${roomNum}`;
    }
    return rawRoom;
}
