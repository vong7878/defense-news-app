// ==========================================
// 🌍 common.js - ລະບົບແປພາສາ ແລະ ຈັດການສ່ວນກາງ (6 ພາສາ)
// ==========================================

const reportTranslations = {
    la: { 
        specialPoint: "ຮັບຄະແນນພິເສດ", deductPoint: "ຖືກຫັກຄະແນນ", noReports: "ຍັງບໍ່ມີບົດລາຍງານ", 
        fromAdmin: "ຈາກຜູ້ສ້າງເວັບໄຊ", approved: "ອະນຸມັດແລ້ວ", pending: "ລໍຖ້າ Admin ອະນຸມັດ", 
        videoDrive: "ວິດີໂອບົນ Google Drive", openDrive: "ເປີດເບິ່ງວິດີໂອໃນ Google Drive", 
        approveBtn: "ອະນຸມັດ", deleteReportBtn: "ລົບລາຍງານ", room: "ຫ້ອງ", actionPhotos: "ຮູບພາບການປະຕິບັດງານ", sender: "ຜູ້ສົ່ງ" 
    },
    th: { 
        specialPoint: "รับคะแนนพิเศษ", fromAdmin: "จากผู้สร้างเว็บไซต์", deductPoint: "ถูกหักคะแนน", 
        noReports: "ยังไม่มีรายงาน", approved: "อนุมัติแล้ว", pending: "รอ Admin อนุมัติ", 
        videoDrive: "วิดีโอบน Google Drive", openDrive: "เปิดดูวิดีโอใน Google Drive", 
        approveBtn: "อนุมัติ", deleteReportBtn: "ลบรายงาน", actionPhotos: "รูปภาพการปฏิบัติงาน", room: "ห้อง", sender: "ผู้ส่ง" 
    },
    vn: { 
        specialPoint: "Nhận điểm đặc biệt", actionPhotos: "Hình ảnh hoạt động", noReports: "Chưa có báo cáo", 
        deductPoint: "Bị trừ điểm", fromAdmin: "Từ người tạo trang web", approved: "Đã phê duyệt", 
        videoDrive: "Video trên Google Drive", openDrive: "Mở xem video trên Google Drive", 
        approveBtn: "Phê duyệt", deleteReportBtn: "Xóa báo cáo", pending: "Chờ phê duyệt", room: "Phòng", sender: "Người gửi" 
    },
    en: { 
        specialPoint: "Received special points", deductPoint: "Deducted points", noReports: "No reports yet", 
        fromAdmin: "From website creator", actionPhotos: "Action Photos", approved: "Approved", 
        videoDrive: "Google Drive Video", openDrive: "Open Video in Google Drive", 
        approveBtn: "Approve", deleteReportBtn: "Delete Report", pending: "Pending approval", room: "Room", sender: "Sender" 
    },
    ch: { 
        specialPoint: "获得特殊加分", deductPoint: "扣除分数", fromAdmin: "来自网站创作者", 
        noReports: "暂无报告", approved: "已批准", actionPhotos: "行动照片", pending: "等待批准", 
        room: "房间", videoDrive: "谷歌网盘视频", openDrive: "在谷歌网盘中打开视频", 
        approveBtn: "批准", deleteReportBtn: "删除报告", sender: "发件人" 
    },
    kr: { 
        specialPoint: "특별 점수 획득", deductPoint: "점수 차감", noReports: "아직 보고서가 없습니다", 
        fromAdmin: "웹사이트 제작자로부터", actionPhotos: "활동 사진", approved: "승인됨", 
        pending: "승인 대기 중", videoDrive: "구글 드라이브 동영상", openDrive: "구글 드라이브에서 동영상 열기", 
        approveBtn: "승인", deleteReportBtn: "보고서 삭제", room: "방", sender: "보낸사람" 
    }
};

// 🔍 ໃຫ້ກວດຈັບຈາກຊື່ໄຟລ໌ HTML ຕົ້ນທາງກ່ອນສະເໝີ (ຮັບປະກັນ 100%)
window.detectCurrentLanguage = function() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('_vn')) return 'vn';
    if (path.includes('_th')) return 'th';
    if (path.includes('_en')) return 'en';
    if (path.includes('_ch')) return 'ch';
    if (path.includes('_kr')) return 'kr';
    if (path.includes('_lo') || path.includes('index.html')) return 'la';
    
    return window.currentLang || localStorage.getItem('selected_lang') || 'la';
};

// 📖 ດຶງຄຳແປທັງໝົດຕາມພາສາປັດຈຸບັນ
window.getTranslationLabels = function() {
    const lang = window.detectCurrentLanguage();
    return reportTranslations[lang] || reportTranslations['la'];
};

// 🔄 ແປຂໍ້ຄວາມລາຍລະອຽດບົດລາຍງານ (ຄະແນນພິເສດ / ຖືກຫັກຄະແນນ) ໃຫ້ກົງກັບພາສາທີ່ເປີດຢູ່
window.getTranslatedReportDesc = function(description) {
    const t = window.getTranslationLabels();
    let displayDesc = description || '';

    const specialKeywords = [
        "ຄະແນນພິເສດ", "ຖືກຫັກຄະແນນ",
        "Điểm đặc biệt", "điểm đặc biệt", "Bị trừ điểm",
        "special points", "Deducted points",
        "特殊加分", "扣除分数",
        "특별 점수", "점수 차감",
        "รับคะแนนพิเศษ", "ถูกหักคะแนน"
    ];

    const isSpecial = specialKeywords.some(kw => displayDesc.includes(kw));
    if (isSpecial) {
        const ptsMatch = displayDesc.match(/([+-]?\d+)/);
        const ptsNum = ptsMatch ? parseInt(ptsMatch[1], 10) : 0;
        const isNegative = ptsNum < 0;
        const signText = ptsNum > 0 ? `+${ptsNum}` : `${ptsNum}`;
        const label = isNegative ? t.deductPoint : t.specialPoint;
        const icon = isNegative ? "➖" : "⭐";
        displayDesc = `${icon} ${label} (${signText}) - ${t.fromAdmin}`;
    }
    return displayDesc;
};

// 🛡️ ກວດສອບສະຖານະ Admin ຂ້າມໜ້າ/ຂ້າມພາສາທັນທີທີ່ໂຫຼດໜ້າເວັບ
window.syncAdminUIAcrossPages = function() {
    const currentRoomUser = localStorage.getItem('current_room_user') || null;
    const userRole = localStorage.getItem('current_user_role') || 'user';

    const adminBox = document.getElementById('admin-panel-box');
    const adminChatLi = document.getElementById('tab-admin-chat-li');
    const superAdminSpecialPoints = document.getElementById('super-admin-special-points');

    if (currentRoomUser && userRole === 'admin') {
        if (adminBox) adminBox.classList.remove('hidden');
        if (adminChatLi) adminChatLi.classList.remove('hidden');

        const isSuper = currentRoomUser.includes('ຜູ້ສ້າງ:') ||
                        currentRoomUser.includes('Người tạo:') ||
                        currentRoomUser.includes('ผู้สร้าง:') ||
                        currentRoomUser.includes('Creator:') ||
                        currentRoomUser.includes('Super Admin');

        if (superAdminSpecialPoints) {
            if (isSuper) {
                superAdminSpecialPoints.classList.remove('hidden');
            } else {
                superAdminSpecialPoints.classList.add('hidden');
            }
        }
    } else {
        if (adminBox) adminBox.classList.add('hidden');
        if (adminChatLi) adminChatLi.classList.add('hidden');
        if (superAdminSpecialPoints) superAdminSpecialPoints.classList.add('hidden');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    window.syncAdminUIAcrossPages();
});
// 🔀 ຟັງຊັນປ່ຽນພາສາ ແລະ พาไปยังໄຟລ໌ HTML ຂອງພາສານັ້ນໆ
window.changeWebsiteLanguage = function(lang) {
    localStorage.setItem('selected_lang', lang);
    
    // ກຳນົດເສັ້ນທາງໄຟລ໌ HTML ຕາມພາສາທີ່ເລືອກ
    let targetPage = 'index.html'; // ພາສາລາວ (ຄ່າເລີ່ມຕົ້ນ)
    if (lang === 'vn') targetPage = 'index_vn.html';
    else if (lang === 'th') targetPage = 'index_th.html';
    else if (lang === 'en') targetPage = 'index_en.html';
    else if (lang === 'ch') targetPage = 'index_ch.html';
    else if (lang === 'kr') targetPage = 'index_kr.html';
    else if (lang === 'la') targetPage = 'index.html'; // ຫຼື index_lo.html ຕາມໂຄງສ້າງຂອງທ່ານ

    // ໄປຍังໜ້າເວັບຂອງພາສານັ້ນ
    window.location.href = targetPage;
};

// 🎯 ອັບເດດຄ່າໃນ Select Dropdown ให้ກົງກັບພາສາປັດຈຸບັນທັນທີທີ່ໂຫຼດໜ້າເວັບ
document.addEventListener('DOMContentLoaded', () => {
    window.syncAdminUIAcrossPages();
    
    const currentLang = window.detectCurrentLanguage();
    const langSelect = document.getElementById('language-selector');
    if (langSelect) {
        langSelect.value = currentLang;
    }
});
