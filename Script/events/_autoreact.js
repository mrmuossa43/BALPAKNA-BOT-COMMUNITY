module.exports.config = {
  name: "ريأكت",
  version: "1.1.1",
  hasPermission: 2,
  credits: "S H A D O W", description: "ردود البوت",   commandCategory: "الـــمــطـــور", cooldowns: 0, }; const fs = require("fs");

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) { var { threadID, messageID } = event; let react = event.body.toLowerCase();

 
if (
	react.includes("ضحك") ||
	react.includes("كسم") ||
	react.includes("غبي") ||
	react.includes("كس") ||
	react.includes("كلب") ||
	react.includes("🤡") ||
	react.includes("دراسه") ||
	react.includes("شيت") ||
	react.includes("لول") ||
	react.includes("كسمك") ||
	react.includes("عفن") ||
	react.includes("زب") ||
	react.includes("خرا") ||
	react.includes("خنزير") ||
	react.includes("زبر") ||
	react.includes("طيز") ||
	react.includes("فقص") ||
	react.includes("سكس") ||
	react.includes("زك") ||
	react.includes("زكم") ||
	react.includes("زكمك") ||
	react.includes("امك") ||
	react.includes("ياولد") ||
	react.includes("قح") ||
	react.includes("قحبة") ||
	react.includes("ني") ||
	react.includes("نيك") ||
	react.includes("طاق") ||
	react.includes("طاقتك") ||
	react.includes("😂") ||
	react.includes("ونبيس") ||
	react.includes("شلال") ||
	react.includes("احا") ||
	react.includes("روعب") ||
	react.includes("يمهه") ||
	react.includes("زباله") ||
	react.includes("زامل") ||
	react.includes("شزب") ||
	react.includes("تشاشتك") ||
	react.includes("عيب") ||
	react.includes("هنيكك") ||
	react.includes("انيكك") ||
	react.includes("هسبك") ||
	react.includes("كيفكم") ||
	react.includes("حيوان") ||
	react.includes("زا") ||
	react.includes("الرفاق") ||
	react.includes("الحياه")
) {
	var msg = {
		body: "",
	};
	api.sendMessage(msg, threadID, messageID);
	api.setMessageReaction("😆", event.messageID, (err) => {}, true);
}

if (
	react.includes("الله") ||
	react.includes("النبي") ||
	react.includes("الحب") ||
	react.includes("كيف") ||
	react.includes("دومك") ||
	react.includes("غالي") ||
	react.includes("امي") ||
	react.includes("رمضان") ||
	react.includes("قرأن") ||
	react.includes("دعاء") ||
	react.includes("طرد") ||
	react.includes("موسى") ||
	react.includes("بوت") ||
	react.includes("ميكو") ||
	react.includes("المطور") ||
	react.includes("منور") ||
	react.includes("الموافقه") ||
	react.includes("المجموعات") ||
	react.includes("اوامر") ||
	react.includes("القاءمه") ||
	react.includes("زواج") ||
	react.includes("الحب") ||
	react.includes("الطرد") ||
	react.includes("sleep") ||
	react.includes("نوم") ||
	react.includes("نام") ||
	react.includes("ايتشيكا") ||
	react.includes("نينو") ||
	react.includes("يوتسوبا") ||
	react.includes("اتسوكي") ||
	react.includes("التوأم") ||
	react.includes("التوائم") ||
	react.includes("التوأم الخمسة") ||
	react.includes("التوائم الخمسة") ||
	react.includes("ظهر") ||
	react.includes("عصر") ||
	react.includes("مغرب") ||
	react.includes("القروب") ||
	react.includes("الفيلق") ||
	react.includes("🤧") ||
	react.includes("💞") ||
	react.includes("🌿") ||
	react.includes("💆") ||
	react.includes("❤️") ||
	react.includes("احترام") ||
	react.includes("تقدير") ||
	react.includes("حكي") ||
	react.includes("🙃") ||
	react.includes("كرامه") ||
	react.includes("رسل") ||
	react.includes("مرتي") ||
	react.includes("ادمن") ||
	react.includes("طفل") ||
	react.includes("غوالي") ||
	react.includes("تريس") ||
	react.includes("تم") ||
	react.includes("عقلي") ||
	react.includes("قلبي") ||
	react.includes("روحي") ||
	react.includes("كيوتتي") ||
	react.includes("تدلل") ||
	react.includes("حبي") ||
	react.includes("الزواج") ||
	react.includes("الزواج") ||
	react.includes("🤭") ||
	react.includes("🌚")
) {
	var lab = {
		body: "",
	};
	api.sendMessage(lab, threadID, messageID);
	api.setMessageReaction("❤️", event.messageID, (err) => {}, true);
}

if (
	react.includes("حزن") ||
	react.includes("وجع") ||
	react.includes("قرف") ||
	react.includes("تبا") ||
	react.includes("اااخ") ||
	react.includes("🥀") ||
	react.includes("احزان") ||
	react.includes("تعبت") ||
	react.includes("كرهت حياتي") ||
	react.includes("تعبان") ||
	react.includes("حزينه") ||
	react.includes("تخلصنا") ||
	react.includes("مريض") ||
	react.includes("حزينة") ||
	react.includes("😕") ||
	react.includes("☹️") ||
	react.includes("🥸") ||
	react.includes("👽") ||
	react.includes(":(") ||
	react.includes("المدير") ||
	react.includes("الحياة") ||
	react.includes("اكتئاب") ||
	react.includes("احباط") ||
	react.includes("ليبيا") ||
	react.includes("لا") ||
	react.includes("ببكي") ||
	react.includes("حنيت")
) {
	var sad = {
				body: ""
			}
			api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
          };
    if(react.includes("صباح") || react.includes("مساء") || react.includes("ثبح") || react.includes("سلام") || react.includes("السلام") || react.includes("نمت") || react.includes("صبح") || react.includes("ظهر") || react.includes("عصر") || react.includes("مغرب") || react.includes("عشاء") || react.includes("ليل") || react.includes("نهار")) {
      var heart = {
				body: ""
			}
			api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
                }
        }
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
 