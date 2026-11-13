// ==========================================
// 🌍 ລະບົບແປພາສາ ແລະ ຈັດການສ່ວນກາງ (6 ພາສາ)
// ==========================================

const reportTranslations = {
    la: { specialPoint: "ຮັບຄະແນນພິເສດ", fromAdmin: "ຈາກຜູ້ສ້າງເວັບໄຊ", approved: "ອະນຸມັດແລ້ວ", pending: "ລໍຖ້າ Admin ອະນຸມັດ", room: "ຫ້ອງ", sender: "ຜູ້ສົ່ງ" },
    th: { specialPoint: "รับคะแนนพิเศษ", fromAdmin: "จากผู้สร้างเว็บไซต์", approved: "อนุมัติแล้ว", pending: "รอ Admin อนุมัติ", room: "ห้อง", sender: "ผู้ส่ง" },
    vn: { specialPoint: "Nhận điểm đặc biệt", fromAdmin: "Từ người tạo trang web", approved: "Đã phê duyệt", pending: "Chờ phê duyệt", room: "Phòng", sender: "Người gửi" },
    en: { specialPoint: "Received special points", fromAdmin: "From website creator", approved: "Approved", pending: "Pending approval", room: "Room", sender: "Sender" },
    ch: { specialPoint: "获得特殊加分", fromAdmin: "来自网站创作者", approved: "已批准", pending: "等待批准", room: "房间", sender: "发件人" },
    kr: { specialPoint: "특별 점수 획득", fromAdmin: "웹사이트 제작자로부터", approved: "승인됨", pending: "승인 대기 중", room: "방", sender: "보낸사람" }
};

// ຟັງຊັນສຳລັບແປຂໍ້ຄວາມລາຍງານ
window.getTranslatedReportDesc = function(description) {
    const lang = window.currentLang || 'la';
    const t = reportTranslations[lang] || reportTranslations['la'];
    
    let displayDesc = description || '';
    if (displayDesc.includes("ຄະແນນພິເສດ") || displayDesc.includes("Điểm đặc biệt") || displayDesc.includes("special points") || displayDesc.includes("特殊加分") || displayDesc.includes("특별 점수")) {
        const ptsMatch = displayDesc.match(/([+-]?\d+)/);
        const ptsNum = ptsMatch ? ptsMatch[1] : '';
        const signText = ptsNum.startsWith('+') ? ptsNum : (parseInt(ptsNum) > 0 ? '+' + ptsNum : ptsNum);
        displayDesc = `⭐ ${t.specialPoint} (${signText}) ${t.fromAdmin}`;
    }
    return displayDesc;
};

// ຟັງຊັນຄຳແປທົ່ວໄປ
window.getTranslationLabels = function() {
    const lang = window.currentLang || 'la';
    return reportTranslations[lang] || reportTranslations['la'];
};
