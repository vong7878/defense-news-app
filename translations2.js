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

esc: "View summary scores and search by Week, Month, or Year",
        period_weekly: "📅 Weekly",
        period_monthly: "📆 Monthly",
        period_yearly: "🗓️ Yearly",
        top_room_label: "Rank 1 Room",
        total_points_label: "Total Score",
        approved_count_label: "Approved Reports",
        chart_title: "📈 Score Summary Chart",
        news_summary_title: "📊 News & Announcements Overview",
        recent_news: "Recent Posts",
        search_news_ph: "Search news title...",
        scoreboard_title: "🏆 Room Hygiene Scoreboard",
        hygiene_summary_title: "📊 Hygiene Progress Summary",
        member_form_title: "👤 Member Report Form: Submit & Verify",
        sender_name: "Full Name:",
        your_room: "🏠 Your Room (Logged in):",
        no_room_selected: "No room selected",
        task_desc: "Hygiene Details:",
        task_desc_ph: "Describe task results...",
        live_video_label: "📹 Record Live Video (Max 1 minute):",
        submit_report_btn: "🚀 Submit Report for Score (Sun 16:00 - 19:00)",
        feedback_title: "💬 Feedback on Defense Unit Operations",
        feedback_desc: "Your feedback will be sent directly to all 4 Admins",
        feedback_input_ph: "Type your feedback or suggestions...",
        send_feedback_btn: "🚀 Send Feedback to 4 Admins",
        feedback_history: "📜 Sent Feedback History",
        login_title: "System Login",
        login_subtitle: "Select room for User or Admin mode",
        select_room_ph: "-- Select Room or Admin --",
        creator_login: "👑 Site Creator (Email)",
        sub_admin_1: "⚙️ Sub-Admin 1",
        sub_admin_2: "⚙️ Sub-Admin 2",
        sub_admin_3: "⚙️ Sub-Admin 3",
        confirm_login_btn: "✅ Login",
        footer_text: "News & Hygiene Tracking System - Defense Unit © 2026",
        admin_panel_title: "⚙️ System Management (Admin)",
        btn_add_news: "Add News/Notice",
        btn_add_cyber: "Add Hygiene Media (Admin)",
        special_points_title: "⭐ Special Score Adjustment (+/-)",
        select_room_default: "-- Select Room --",
        btn_save: "Save",
        room: "Room",
        like: "Like",
        share: "Share",
        points: "Points",
        reports: "Reports",
        topRoom: "Top Ranked Room",
        totalPoints: "Total Points",
        approvedReports: "Approved Reports",
        logout: "Logout",
        special_point_desc: "+ Received special points (+1 point) from the website creator"
    },
    ch: {
        app_title: "防务部新闻",
        app_subtitle: "Defense Unit News & Hygiene Tracking",
        guide_btn: "使用指南",
        loading_time: "加载时间...",
        recent_notif: "🔔 最新通知",
        clear_all: "全部清除",
        no_notif: "暂无通知",
        main_menu: "主菜单",
        menu_news: "📰 新闻与公告",
        menu_score_summary: "📊 积分汇总",
        menu_scoreboard: "🏆 房间排行榜",
        menu_cyber: "🧹 卫生追踪",
        menu_member: "👤 卫生报告 (成员)",
        menu_feedback: "💬 用户反馈",
        menu_game: "游戏专区 (15关)",
        game_desc: "畅玩贪吃蛇、配对和打地鼠游戏",
        play_now: "立即开始 ➔",
        admin_chat_btn: "💬 管理员私密聊天 (4人)",
        tab_snake: "🐍 贪吃蛇",
        tab_match: "🍓 水果配对",
        tab_mole: "🐹 打地鼠",
        home_btn: "🏠 首页",
        target_label: "🎯 目标:",
        speed_label: "⚡ 速度:",
        start_level_btn: "🎮 开始关卡",
        moves_label: "🔄 剩余步数:",
        pairs_label: "🏆 剩余配对:",
        reset_btn: "🔄 重新开始",
        score_label: "🎯 得分:",
        time_label: "⏱️ 时间:",
        easy: "简单",
        medium: "中等",
        hard: "🔥 困难",
        unlimited: "不限制",
        news_categories: "新闻分类",
        cat_all: "全部",
        cat_notice: "📢 紧急通知",
        cat_activity: "🎖️ 任务/活动",
        cat_security: "🔒 安全",
        visitor_stats: "👥 访问统计",
        desktop_users: "💻 电脑用户:",
        mobile_users: "📱 手机用户:",
        total_users: "📊 总访客数:",
        summary_title: "📊 卫生积分汇总 (看板)",
        summary_desc: "按周、月或年查看和搜索汇总积分",
        period_weekly: "📅 每周",
        period_monthly: "📆 每月",
        period_yearly: "🗓️ 每年",
        top_room_label: "第一名房间",
        total_points_label: "总积分",
        approved_count_label: "已批准报告",
        chart_title: "📈 积分汇总图表",
        news_summary_title: "📊 新闻与公告概览",
        recent_news: "最新动态",
        search_news_ph: "搜索新闻标题...",
        scoreboard_title: "🏆 房间卫生排行榜",
        hygiene_summary_title: "📊 卫生进度汇总",
        member_form_title: "👤 成员报告表: 提交与验证",
        sender_name: "姓名:",
        your_room: "🏠 您的房间 (已登录):",
        no_room_selected: "未选择房间",
        task_desc: "卫生详情:",
        task_desc_ph: "描述任务结果...",
        live_video_label: "📹 录制直播视频 (最长1分钟):",
        submit_report_btn: "🚀 提交报告获取积分 (周日 16:00 - 19:00)",
        feedback_title: "💬 防务部工作意见反馈",
        feedback_desc: "您的意见将直接发送给所有4位管理员",
        feedback_input_ph: "输入您的意见或建议...",
        send_feedback_btn: "🚀 发送意见给4位管理员",
        feedback_history: "📜 发送的历史意见",
        login_title: "系统登录",
        login_subtitle: "选择用户房间或管理员模式",
        select_room_ph: "-- 请选择房间或管理员 --",
        creator_login: "👑 网站创作者 (邮箱)",
        sub_admin_1: "⚙️ 子管理员 1",
        sub_admin_2: "⚙️ 子管理员 2",
        sub_admin_3: "⚙️ 子管理员 3",
        confirm_login_btn: "✅ 登录",
        footer_text: "防务部新闻与卫生追踪系统 © 2026",
        admin_panel_title: "⚙️ 系统管理 (Admin)",
        btn_add_news: "添加新闻/公告",
        btn_add_cyber: "添加卫生媒体 (Admin)",
        special_points_title: "⭐ 特殊积分调整 (+/-)",
        select_room_default: "-- 选择房间 --",
        btn_save: "保存",
        room: "房间",
        like: "赞",
        share: "分享",
        points: "分",
        reports: "份报告",
        topRoom: "排名第一的房间",
        totalPoints: "总积分",
        approvedReports: "已批准报告",
        logout: "退出登录",
        special_point_desc: "+ 获得网站创作者的特殊加分 (+1分)"
    },
    kr: {
        app_title: "방위부 뉴스",
        app_subtitle: "Defense Unit News & Hygiene Tracking",
        guide_btn: "사용 가이드",
        loading_time: "시간 로딩 중...",
        recent_notif: "🔔 최근 알림",
        clear_all: "모두 지우기",
        no_notif: "알림이 없습니다",
        main_menu: "메인 메뉴",
        menu_news: "📰 뉴스 및 공지사항",
        menu_score_summary: "📊 점수 요약",
        menu_scoreboard: "🏆 호실별 리더보드",
        menu_cyber: "🧹 위생 추적",
        menu_member: "👤 위생 보고 (회원)",
        menu_feedback: "💬 사용자 피드백",
        menu_game: "게임 존 (15 레벨)",
        game_desc: "스네이크, 매칭, 두더지 잡기 게임 플레이",
        play_now: "지금 플레이 ➔",
        admin_chat_btn: "💬 관리자 비공개 채팅 (4명)",
        tab_snake: "🐍 스네이크 게임",
        tab_match: "🍓 과일 맞추기",
        tab_mole: "🐹 두더지 잡기",
        home_btn: "🏠 홈",
        target_label: "🎯 목표:",
        speed_label: "⚡ 속도:",
        start_level_btn: "🎮 레벨 시작",
        moves_label: "🔄 남은 횟수:",
        pairs_label: "🏆 남은 쌍:",
        reset_btn: "🔄 레벨 재시작",
        score_label: "🎯 점수:",
        time_label: "⏱️ 시간:",
        easy: "쉬움",
        medium: "보통",
        hard: "🔥 어려움",
        unlimited: "무제한",
        news_categories: "뉴스 카테고리",
        cat_all: "전체",
        cat_notice: "📢 긴급 공지",
        cat_activity: "🎖️ 임무/활동",
        cat_security: "🔒 보안",
        visitor_stats: "👥 방문자 통계",
        desktop_users: "💻 데스크톱 사용자:",
        mobile_users: "📱 모바일 사용자:",
        total_users: "📊 총 방문자:",
        summary_title: "📊 위생 점수 요약 (대시보드)",
        summary_desc: "주별, 월별, 연도별로 요약 점수 조회 및 검색",
        period_weekly: "📅 주간",
        period_monthly: "📆 월간",
        period_yearly: "🗓️ 연간",
        top_room_label: "1위 호실",
        total_points_label: "총점",
        approved_count_label: "승인된 보고서",
        chart_title: "📈 점수 요약 차트",
        news_summary_title: "📊 뉴스 및 공지사항 개요",
        recent_news: "최근 게시물",
        search_news_ph: "뉴스 제목 검색...",
        scoreboard_title: "🏆 호실 위생 리더보드",
        hygiene_summary_title: "📊 위생 진행 상황 요약",
        member_form_title: "👤 회원 보고서 양식: 제출 및 확인",
        sender_name: "이름:",
        your_room: "🏠 내 호실 (로그인됨):",
        no_room_selected: "선택된 호실 없음",
        task_desc: "위생 세부정보:",
        task_desc_ph: "작업 결과 설명...",
        live_video_label: "📹 라이브 비디오 녹화 (최대 1분):",
        submit_report_btn: "🚀 점수 보고서 제출 (일요일 16:00 - 19:00)",
        feedback_title: "💬 방위부 운영 피드백",
        feedback_desc: "피드백은 4명의 관리자에게 직접 전달됩니다.",
        feedback_input_ph: "피드백이나 제안을 입력하세요...",
        send_feedback_btn: "🚀 4명의 관리자에게 피드백 전송",
        feedback_history: "📜 보낸 피드백 기록",
        login_title: "시스템 로그인",
        login_subtitle: "사용자 호실 선택 또는 관리자 모드",
        select_room_ph: "-- 호실 또는 관리자 선택 --",
        creator_login: "👑 사이트 제작자 (이메일)",
        sub_admin_1: "⚙️ 서브 관리자 1",
        sub_admin_2: "⚙️ 서브 관리자 2",
        sub_admin_3: "⚙️ 서브 관리자 3",
        confirm_login_btn: "✅ 로그인",
        footer_text: "뉴스 및 위생 추적 시스템 - 방위부 © 2026",
        admin_panel_title: "⚙️ 시스템 관리 (Admin)",
        btn_add_news: "뉴스/공지 추가",
        btn_add_cyber: "위생 미디어 추가 (Admin)",
        special_points_title: "⭐ 특별 점수 조정 (+/-)",
        select_room_default: "-- 호실 선택 --",
        btn_save: "저장",
        room: "호실",
        like: "좋아요",
        share: "공유",
        points: "점",
        reports: "건",
        topRoom: "1위 방",
        totalPoints: "총점",
        approvedReports: "승인된 보고서",
        logout: "로그아웃",
        special_point_desc: "+ 웹사이트 제작자로부터 특별 점수를 받았습니다 (+1점)"
    }
};

// ⚙️ ຟັງຊັນຊ່ວຍດຶງຄຳສັບ ແລະ ຈັດການພາສາ
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
