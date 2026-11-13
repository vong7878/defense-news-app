// ==========================================
// 🌍 ລະບົບແປພາສາ ແລະ ຈັດການສ່ວນກາງ (6 ພາສາ)
// ==========================================

const reportTranslations = {
    la: { specialPoint: "ຮັບຄະແນນພິເສດ",deductPoint: "ຖືກຫັກຄະແນນ",noReports: "ຍັງບໍ່ມີບົດລາຍງານ", fromAdmin: "ຈາກຜູ້ສ້າງເວັບໄຊ", approved: "ອະນຸມັດແລ້ວ", pending: "ລໍຖ້າ Admin ອະນຸມັດ",videoDrive: "ວິດີໂອບົນ Google Drive",openDrive: "ເປີດເບິ່ງວິດີໂອໃນ Google Drive",approveBtn: "ອະນຸມັດ",deleteReportBtn: "ລົບລາຍງານ" room: "ຫ້ອງ",actionPhotos: "ຮູບພາບການປະຕິບັດງານ", sender: "ຜູ້ສົ່ງ" },
    th: { specialPoint: "รับคะแนนพิเศษ", fromAdmin: "จากผู้สร้างเว็บไซต์",deductPoint: "ถูกหักคะแนน",noReports: "ยังไม่มีรายงาน", approved: "อนุมัติแล้ว", pending: "รอ Admin อนุมัติ",videoDrive: "วิดีโอบน Google Drive",openDrive: "เปิดดูวิดีโอใน Google Drive",approveBtn: "อนุมัติ",deleteReportBtn: "ลบรายงาน" actionPhotos: "รูปภาพการปฏิบัติงาน",room: "ห้อง", sender: "ผู้ส่ง" },
    vn: { specialPoint: "Nhận điểm đặc biệt",actionPhotos: "Hình ảnh hoạt động",noReports: "Chưa có báo cáo",deductPoint: "Bị trừ điểm", fromAdmin: "Từ người tạo trang web", approved: "Đã phê duyệt",videoDrive: "Video trên Google Drive",openDrive: "Mở xem video trên Google Drive",approveBtn: "Phê duyệt",deleteReportBtn: "Xóa báo cáo" pending: "Chờ phê duyệt", room: "Phòng", sender: "Người gửi" },
    en: { specialPoint: "Received special points",deductPoint: "Deducted points",noReports: "No reports yet", fromAdmin: "From website creator",actionPhotos: "Action Photos", approved: "Approved",videoDrive: "Google Drive Video",openDrive: "Open Video in Google Drive",approveBtn: "Approve",deleteReportBtn: "Delete Report" pending: "Pending approval", room: "Room", sender: "Sender" },
    ch: { specialPoint: "获得特殊加分",deductPoint: "扣除分数", fromAdmin: "来自网站创作者",noReports: "暂无报告", approved: "已批准",actionPhotos: "行动照片", pending: "等待批准", room: "房间",videoDrive: "谷歌网盘视频",openDrive: "在谷歌网盘中打开视频",approveBtn: "批准",deleteReportBtn: "删除报告" sender: "发件人" },
    kr: { specialPoint: "특별 점수 획득",deductPoint: "점수 차감",noReports: "아직 보고서가 없습니다", fromAdmin: "웹사이트 제작자로부터",actionPhotos: "활동 사진", approved: "승인됨", pending: "승인 대기 중",videoDrive: "구글 드라이브 동영상",openDrive: "구글 드라이브에서 동영상 열기",approveBtn: "승인",deleteReportBtn: "보고서 삭제" room: "방", sender: "보낸사람" }
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
