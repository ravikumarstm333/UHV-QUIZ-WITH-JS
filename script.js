// Quiz Data with Hinglish translations
const quizData = [
    {
        question: "What best defines: Justice involves?",
        hinglish: "Justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "Existence is:",
        hinglish: "अस्तित्व क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "Prosperity refers to:",
        hinglish: "Prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "In UHV, professional ethics focuses on means:",
        hinglish: "UHV में, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, body is means:",
        hinglish: "UHV में, body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "Body needs are:",
        hinglish: "Body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "According to value education, fearlessness arises from refers to:",
        hinglish: "Value education के according, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "In UHV, existence is means:",
        hinglish: "UHV में, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "Body needs are:",
        hinglish: "Body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "According to value education, professional ethics focuses on refers to:",
        hinglish: "Value education के according, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Professional ethics focuses on?",
        hinglish: "Professional ethics सबसे अच्छे तरीके से किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, professional ethics focuses on means:",
        hinglish: "UHV में, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Trust means?",
        hinglish: "Trust (विश्वास) का सही मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "What best defines: Love refers to?",
        hinglish: "Love (प्यार) का सही मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "According to value education, existence is refers to:",
        hinglish: "Value education के according, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "Nature works on:",
        hinglish: "Nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "Self is:",
        hinglish: "Self (स्वयं) क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "In UHV, happiness refers to means:",
        hinglish: "UHV में, happiness (खुशी) का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "In UHV, gratitude is means:",
        hinglish: "UHV में, gratitude (कृतज्ञता) क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "In UHV, natural acceptance means means:",
        hinglish: "UHV में, natural acceptance (स्वाभाविक स्वीकृति) क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "In UHV, professional ethics focuses on means:",
        hinglish: "UHV में, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, four orders of nature include means:",
        hinglish: "UHV में, प्रकृति के चार क्रम कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "Professional ethics focuses on:",
        hinglish: "Professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, happiness refers to means:",
        hinglish: "UHV में, happiness (खुशी) का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "Love refers to:",
        hinglish: "प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "According to value education, self is refers to:",
        hinglish: "Value education के according, self (स्वयं) क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "What best defines: Body needs are?",
        hinglish: "Body की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Self needs are:",
        hinglish: "Self की जरूरतें कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "In UHV, prosperity refers to means:",
        hinglish: "UHV में, prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "Professional ethics focuses on:",
        hinglish: "Professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Respect is based on?",
        hinglish: "सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "Four orders of nature include:",
        hinglish: "प्रकृति के चार क्रम कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "Body needs are:",
        hinglish: "शरीर की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "In UHV, body is means:",
        hinglish: "UHV में, body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Four orders of nature include?",
        hinglish: "प्रकृति के चार क्रम सबसे अच्छे तरीके से कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "In UHV, relationships thrive on means:",
        hinglish: "UHV में, रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "What best defines: Love refers to?",
        hinglish: "प्यार का सही मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "What best defines: Professional ethics focuses on?",
        hinglish: "Professional ethics सबसे अच्छे तरीके से किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Happiness refers to?",
        hinglish: "खुशी का सही मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "In UHV, nature works on means:",
        hinglish: "UHV में, nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "In UHV, happiness refers to means:",
        hinglish: "UHV में, happiness (खुशी) का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "What best defines: Love refers to?",
        hinglish: "प्यार का सही मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "What best defines: Love refers to?",
        hinglish: "प्यार का सही मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "Happiness refers to:",
        hinglish: "खुशी का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "In UHV, trust means means:",
        hinglish: "UHV में, trust (विश्वास) का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "According to value education, prosperity refers to refers to:",
        hinglish: "Value education के according, prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "What best defines: Respect is based on?",
        hinglish: "सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "Existence is:",
        hinglish: "अस्तित्व क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "What best defines: Self is?",
        hinglish: "Self (स्वयं) सबसे अच्छे तरीके से क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "What best defines: Happiness refers to?",
        hinglish: "खुशी का सही मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "According to value education, professional ethics focuses on refers to:",
        hinglish: "Value education के according, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Natural acceptance means?",
        hinglish: "Natural acceptance (स्वाभाविक स्वीकृति) का सही मतलब क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "In UHV, justice involves means:",
        hinglish: "UHV में, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "What best defines: Animals follow?",
        hinglish: "जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, fearlessness arises from means:",
        hinglish: "UHV में, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "Affection means:",
        hinglish: "Affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "In UHV, animals follow means:",
        hinglish: "UHV में, जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "What best defines: Prosperity refers to?",
        hinglish: "Prosperity (समृद्धि) का सही मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "In UHV, natural acceptance means means:",
        hinglish: "UHV में, natural acceptance (स्वाभाविक स्वीकृति) क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "What best defines: Affection means?",
        hinglish: "Affection (स्नेह) का सही मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "In UHV, professional ethics focuses on means:",
        hinglish: "UHV में, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, existence is means:",
        hinglish: "UHV में, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "According to value education, body is refers to:",
        hinglish: "Value education के according, body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Justice involves?",
        hinglish: "Justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "In UHV, fearlessness arises from means:",
        hinglish: "UHV में, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "What best defines: Body needs are?",
        hinglish: "Body की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "What best defines: Natural acceptance means?",
        hinglish: "Natural acceptance (स्वाभाविक स्वीकृति) का सही मतलब क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "According to value education, love refers to refers to:",
        hinglish: "Value education के according, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "What best defines: Happiness refers to?",
        hinglish: "खुशी का सही मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "Happiness refers to:",
        hinglish: "खुशी का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "In UHV, love refers to means:",
        hinglish: "UHV में, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "Trust means:",
        hinglish: "विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "Body is:",
        hinglish: "Body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Natural acceptance means?",
        hinglish: "Natural acceptance (स्वाभाविक स्वीकृति) का सही मतलब क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "What best defines: Body is?",
        hinglish: "Body (शरीर) सबसे अच्छे तरीके से क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Love refers to?",
        hinglish: "प्यार का सही मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "According to value education, self needs are refers to:",
        hinglish: "Value education के according, self की जरूरतें कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "Relationships thrive on:",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "According to value education, existence is refers to:",
        hinglish: "Value education के according, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "Body is:",
        hinglish: "Body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Body is?",
        hinglish: "Body (शरीर) सबसे अच्छे तरीके से क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Respect is based on?",
        hinglish: "सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "According to value education, animals follow refers to:",
        hinglish: "Value education के according, जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, gratitude is means:",
        hinglish: "UHV में, gratitude (कृतज्ञता) क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "In UHV, justice involves means:",
        hinglish: "UHV में, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, love refers to refers to:",
        hinglish: "Value education के according, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "According to value education, trust means refers to:",
        hinglish: "Value education के according, विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "In UHV, justice involves means:",
        hinglish: "UHV में, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, affection means refers to:",
        hinglish: "Value education के according, affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "What best defines: Self needs are?",
        hinglish: "Self की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "In UHV, existence is means:",
        hinglish: "UHV में, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "In UHV, affection means means:",
        hinglish: "UHV में, affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "According to value education, nature works on refers to:",
        hinglish: "Value education के according, nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "Trust means:",
        hinglish: "विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "In UHV, body needs are means:",
        hinglish: "UHV में, body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "What best defines: Self needs are?",
        hinglish: "Self की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "In UHV, respect is based on means:",
        hinglish: "UHV में, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "According to value education, body needs are refers to:",
        hinglish: "Value education के according, body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "In UHV, love refers to means:",
        hinglish: "UHV में, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "According to value education, affection means refers to:",
        hinglish: "Value education के according, affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "In UHV, nature works on means:",
        hinglish: "UHV में, nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "Gratitude is:",
        hinglish: "कृतज्ञता क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "What best defines: Body is?",
        hinglish: "Body (शरीर) सबसे अच्छे तरीके से क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "Body needs are:",
        hinglish: "शरीर की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Self needs are:",
        hinglish: "Self की जरूरतें कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "In UHV, trust means means:",
        hinglish: "UHV में, trust (विश्वास) का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "Four orders of nature include:",
        hinglish: "प्रकृति के चार क्रम कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "What best defines: Self needs are?",
        hinglish: "Self की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "What best defines: Gratitude is?",
        hinglish: "कृतज्ञता का सही मतलब क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "Love refers to:",
        hinglish: "प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "What best defines: Natural acceptance means?",
        hinglish: "Natural acceptance (स्वाभाविक स्वीकृति) का सही मतलब क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "In UHV, animals follow means:",
        hinglish: "UHV में, जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, existence is means:",
        hinglish: "UHV में, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "Gratitude is:",
        hinglish: "कृतज्ञता क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "According to value education, professional ethics focuses on refers to:",
        hinglish: "Value education के according, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "What best defines: Four orders of nature include?",
        hinglish: "प्रकृति के चार क्रम सबसे अच्छे तरीके से कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "According to value education, happiness refers to refers to:",
        hinglish: "Value education के according, खुशी का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "In UHV, justice involves means:",
        hinglish: "UHV में, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "According to value education, fearlessness arises from refers to:",
        hinglish: "Value education के according, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "According to value education, four orders of nature include refers to:",
        hinglish: "Value education के according, प्रकृति के चार क्रम कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "What best defines: Professional ethics focuses on?",
        hinglish: "Professional ethics सबसे अच्छे तरीके से किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "According to value education, relationships thrive on refers to:",
        hinglish: "Value education के according, रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "According to value education, prosperity refers to refers to:",
        hinglish: "Value education के according, prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "What best defines: Self is?",
        hinglish: "Self (स्वयं) सबसे अच्छे तरीके से क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "In UHV, love refers to means:",
        hinglish: "UHV में, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "Affection means:",
        hinglish: "Affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "Gratitude is:",
        hinglish: "कृतज्ञता क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "Love refers to:",
        hinglish: "प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "Relationships thrive on:",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "According to value education, gratitude is refers to:",
        hinglish: "Value education के according, कृतज्ञता क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "According to value education, fearlessness arises from refers to:",
        hinglish: "Value education के according, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "In UHV, existence is means:",
        hinglish: "UHV में, existence (अस्तित्व) क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "What best defines: Body needs are?",
        hinglish: "Body की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Affection means:",
        hinglish: "Affection (स्नेह) का मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "What best defines: Body needs are?",
        hinglish: "Body की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Prosperity refers to:",
        hinglish: "समृद्धि का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "According to value education, body needs are refers to:",
        hinglish: "Value education के according, body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Love refers to:",
        hinglish: "प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "Existence is:",
        hinglish: "अस्तित्व क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "In UHV, fearlessness arises from means:",
        hinglish: "UHV में, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "Relationships thrive on:",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "Body is:",
        hinglish: "Body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Self is?",
        hinglish: "Self (स्वयं) सबसे अच्छे तरीके से क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "In UHV, body needs are means:",
        hinglish: "UHV में, body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Relationships thrive on:",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "According to value education, animals follow refers to:",
        hinglish: "Value education के according, जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "Body is:",
        hinglish: "Body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Prosperity refers to?",
        hinglish: "Prosperity (समृद्धि) का सही मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "In UHV, body is means:",
        hinglish: "UHV में, body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "In UHV, love refers to means:",
        hinglish: "UHV में, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "In UHV, nature works on means:",
        hinglish: "UHV में, nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "In UHV, body needs are means:",
        hinglish: "UHV में, body की जरूरतें कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Existence is:",
        hinglish: "अस्तित्व क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "In UHV, prosperity refers to means:",
        hinglish: "UHV में, prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "What best defines: Fearlessness arises from?",
        hinglish: "निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "What best defines: Gratitude is?",
        hinglish: "कृतज्ञता का सही मतलब क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "In UHV, prosperity refers to means:",
        hinglish: "UHV में, prosperity (समृद्धि) का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "What best defines: Affection means?",
        hinglish: "Affection (स्नेह) का सही मतलब क्या है?",
        options: ["Temporary liking", "Attachment", "Sensation", "Mutual happiness"],
        answer: "Mutual happiness"
    },
    {
        question: "According to value education, justice involves refers to:",
        hinglish: "Value education के according, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, respect is based on refers to:",
        hinglish: "Value education के according, सम्मान किस पर आधारित होता है?",
        options: ["Fear", "Status", "Wealth", "Right understanding"],
        answer: "Right understanding"
    },
    {
        question: "According to value education, justice involves refers to:",
        hinglish: "Value education के according, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, justice involves refers to:",
        hinglish: "Value education के according, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, professional ethics focuses on refers to:",
        hinglish: "Value education के according, professional ethics किस पर focus करती है?",
        options: ["Human well-being", "Brand value", "Competition", "Profit"],
        answer: "Human well-being"
    },
    {
        question: "In UHV, justice involves means:",
        hinglish: "UHV में, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "According to value education, nature works on refers to:",
        hinglish: "Value education के according, nature (प्रकृति) कैसे काम करती है?",
        options: ["Competition", "Coexistence", "Chaos", "Conflict"],
        answer: "Coexistence"
    },
    {
        question: "In UHV, natural acceptance means means:",
        hinglish: "UHV में, natural acceptance (स्वाभाविक स्वीकृति) क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "Animals follow:",
        hinglish: "जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, fearlessness arises from means:",
        hinglish: "UHV में, निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "Self is:",
        hinglish: "Self (स्वयं) क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "What best defines: Animals follow?",
        hinglish: "जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, happiness refers to means:",
        hinglish: "UHV में, happiness (खुशी) का मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "Justice involves:",
        hinglish: "Justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "What best defines: Body needs are?",
        hinglish: "Body की जरूरतें सबसे अच्छे तरीके से कैसी होती हैं?",
        options: ["Emotional", "Limited", "Spiritual", "Unlimited"],
        answer: "Limited"
    },
    {
        question: "Animals follow:",
        hinglish: "जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, body is means:",
        hinglish: "UHV में, body (शरीर) क्या है?",
        options: ["Self", "Energy", "Instrument of Self", "Conscious"],
        answer: "Instrument of Self"
    },
    {
        question: "What best defines: Gratitude is?",
        hinglish: "कृतज्ञता का सही मतलब क्या है?",
        options: ["Thankfulness", "Obligation", "Comparison", "Fear"],
        answer: "Thankfulness"
    },
    {
        question: "Relationships thrive on:",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "According to value education, love refers to refers to:",
        hinglish: "Value education के according, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "In UHV, relationships thrive on means:",
        hinglish: "UHV में, रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "What best defines: Happiness refers to?",
        hinglish: "खुशी का सही मतलब क्या है?",
        options: ["Material comfort", "Sensation", "Excitement", "Continuous harmony"],
        answer: "Continuous harmony"
    },
    {
        question: "Trust means:",
        hinglish: "विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "Existence is:",
        hinglish: "अस्तित्व क्या है?",
        options: ["Coexistence", "Chaos", "Void", "Uncertainty"],
        answer: "Coexistence"
    },
    {
        question: "According to value education, love refers to refers to:",
        hinglish: "Value education के according, प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "In UHV, self needs are means:",
        hinglish: "UHV में, self की जरूरतें कैसी होती हैं?",
        options: ["Continuous", "Limited", "Temporary", "Physical"],
        answer: "Continuous"
    },
    {
        question: "According to value education, justice involves refers to:",
        hinglish: "Value education के according, justice (न्याय) में क्या शामिल होता है?",
        options: ["Punishment", "Reward", "Mutual fulfillment", "Superiority"],
        answer: "Mutual fulfillment"
    },
    {
        question: "Trust means:",
        hinglish: "विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    },
    {
        question: "In UHV, animals follow means:",
        hinglish: "UHV में, जानवर क्या follow करते हैं?",
        options: ["Values", "Ethics", "Preconditioning", "Natural acceptance"],
        answer: "Preconditioning"
    },
    {
        question: "In UHV, four orders of nature include means:",
        hinglish: "UHV में, प्रकृति के चार क्रम कौन से हैं?",
        options: ["Plant", "Material", "All of these", "Animal"],
        answer: "All of these"
    },
    {
        question: "Natural acceptance means:",
        hinglish: "Natural acceptance (स्वाभाविक स्वीकृति) का मतलब क्या है?",
        options: ["What society likes", "What media shows", "What others follow", "What I truly want"],
        answer: "What I truly want"
    },
    {
        question: "What best defines: Fearlessness arises from?",
        hinglish: "निडरता कहाँ से आती है?",
        options: ["Right understanding", "Money", "Power", "Weapons"],
        answer: "Right understanding"
    },
    {
        question: "Love refers to:",
        hinglish: "प्यार का मतलब क्या है?",
        options: ["Attraction", "Feeling of relatedness", "Obligation", "Attachment"],
        answer: "Feeling of relatedness"
    },
    {
        question: "What best defines: Relationships thrive on?",
        hinglish: "रिश्ते किस पर पनपते हैं?",
        options: ["Mutual trust", "Competition", "Wealth", "Status"],
        answer: "Mutual trust"
    },
    {
        question: "Prosperity refers to:",
        hinglish: "समृद्धि का मतलब क्या है?",
        options: ["Feeling of enough", "High income", "Accumulation", "Luxury"],
        answer: "Feeling of enough"
    },
    {
        question: "In UHV, self is means:",
        hinglish: "UHV में, self (स्वयं) क्या है?",
        options: ["Material", "Biological", "Mechanical", "Conscious"],
        answer: "Conscious"
    },
    {
        question: "Trust means:",
        hinglish: "विश्वास का मतलब क्या है?",
        options: ["Assurance in intention", "Obligation", "Material gain", "Fear"],
        answer: "Assurance in intention"
    }
];

// For demo, let's fill remaining questions with sample data
for (let i = 30; i < 200; i++) {
    const templates = [
        {
            question: `What best defines: Value ${i}?`,
            hinglish: `Value ${i} का सही मतलब क्या है?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            answer: "Option C"
        },
        {
            question: `In UHV, concept ${i} means:`,
            hinglish: `UHV में, concept ${i} का मतलब क्या है?`,
            options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
            answer: "Choice 2"
        },
        {
            question: `According to education, principle ${i} refers to:`,
            hinglish: `Education के according, principle ${i} का मतलब क्या है?`,
            options: ["Theory A", "Theory B", "Theory C", "Theory D"],
            answer: "Theory B"
        }
    ];
    quizData.push(templates[i % 3]);
}

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = new Array(quizData.length).fill(null);
let isPracticeMode = true;
let testModeQuestions = [];
let testModeAnswers = new Array(30).fill(null);
let testStarted = false;
let timeElapsed = 0;
let timerInterval = null;

// DOM Elements
const practiceModeBtn = document.getElementById('practiceModeBtn');
const testModeBtn = document.getElementById('testModeBtn');
const questionNumber = document.getElementById('questionNumber');
const modeIndicator = document.getElementById('modeIndicator');
const practiceControls = document.getElementById('practiceControls');
const testControls = document.getElementById('testControls');
const questionSelect = document.getElementById('questionSelect');
const currentQNum = document.getElementById('currentQNum');
const timer = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const hinglishBtn = document.getElementById('hinglishBtn');
const hinglishExplanation = document.getElementById('hinglishExplanation');
const hinglishText = document.getElementById('hinglishText');
const optionsContainer = document.getElementById('optionsContainer');
const feedback = document.getElementById('feedback');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackText = document.getElementById('feedbackText');
const correctAnswerText = document.getElementById('correctAnswerText');
const testActions = document.getElementById('testActions');
const submitTestBtn = document.getElementById('submitTestBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const resultsModal = document.getElementById('resultsModal');
const finalScore = document.getElementById('finalScore');
const resultMessage = document.getElementById('resultMessage');
const correctCount = document.getElementById('correctCount');
const incorrectCount = document.getElementById('incorrectCount');
const timeTaken = document.getElementById('timeTaken');
const percentage = document.getElementById('percentage');
const reviewBtn = document.getElementById('reviewBtn');
const retakeBtn = document.getElementById('retakeBtn');

const testPrevBtn = document.getElementById('testPrevBtn');
const testNextBtn = document.getElementById('testNextBtn');

// Initialize Quiz
function initQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.fill(null);
    testModeAnswers.fill(null);
    testStarted = false;
    timeElapsed = 0;
    
    // Stop timer if running
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Reset UI
    scoreElement.textContent = '0';
    timer.textContent = '00:00';
    progressFill.style.width = '0%';
    feedback.classList.remove('show');
    testActions.classList.remove('show');
    resultsModal.classList.remove('show');
    
    // Load first question
    if (isPracticeMode) {
        loadPracticeQuestion(0);
    } else {
        loadTestQuestion(0);
    }
}

// Load Practice Question
function loadPracticeQuestion(index) {
    if (index < 0 || index >= quizData.length) return;
    
    currentQuestionIndex = index;
    const question = quizData[index];
    
    // Update UI
    questionNumber.textContent = `Question ${index + 1} of 200`;
    questionText.textContent = question.question;
    hinglishText.textContent = question.hinglish;
    
    // Update question selector
    questionSelect.value = index + 1;
    
    // Clear options
    optionsContainer.innerHTML = '';
    
    // Create options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (userAnswers[index] === option) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectPracticeOption(option, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === quizData.length - 1;
    
    // Hide feedback and hinglish explanation
    feedback.classList.remove('show');
    hinglishExplanation.classList.remove('show');
    
    // Show correct/incorrect colors if answered
    if (userAnswers[index] !== null) {
        showPracticeFeedback(index);
    }
}

// Load Test Question
function loadTestQuestion(index) {
    if (index < 0 || index >= testModeQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = testModeQuestions[index];
    
    // Update UI
    currentQNum.textContent = index + 1;
    questionText.textContent = question.question;
    hinglishText.textContent = question.hinglish;
    
    // Update progress
    progressFill.style.width = `${((index + 1) / 30) * 100}%`;
    
    // Clear options
    optionsContainer.innerHTML = '';
    
    // Create options
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (testModeAnswers[index] === option) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectTestOption(option, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback and hinglish explanation
    feedback.classList.remove('show');
    hinglishExplanation.classList.remove('show');
}

// Select Practice Option
function selectPracticeOption(selectedOption, optionElement) {
    const index = currentQuestionIndex;
    
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Store answer
    userAnswers[index] = selectedOption;
    
    // Show immediate feedback
    showPracticeFeedback(index);
}

// Select Test Option
function selectTestOption(selectedOption, optionElement) {
    const index = currentQuestionIndex;
    
    // Remove selected class from all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    optionElement.classList.add('selected');
    
    // Store answer
    testModeAnswers[index] = selectedOption;
}

// Show Practice Feedback
function showPracticeFeedback(index) {
    const question = quizData[index];
    const selectedAnswer = userAnswers[index];
    const isCorrect = selectedAnswer === question.answer;
    
    // Mark options as correct/incorrect
    document.querySelectorAll('.option').forEach(opt => {
        const optionText = opt.querySelector('.option-text').textContent;
        if (optionText === question.answer) {
            opt.classList.add('correct');
        } else if (optionText === selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
    });
    
    // Show feedback message
    feedbackText.textContent = isCorrect ? "Correct!" : "Incorrect!";
    feedbackIcon.className = isCorrect ? "fas fa-check-circle" : "fas fa-times-circle";
    correctAnswerText.textContent = isCorrect ? "" : `Correct answer: ${question.answer}`;
    
    feedback.classList.remove('correct', 'incorrect');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedback.classList.add('show');
}

// Switch Mode
function switchMode(isPractice) {
    isPracticeMode = isPractice;
    
    // Update UI
    practiceModeBtn.classList.toggle('active', isPractice);
    testModeBtn.classList.toggle('active', !isPractice);
    practiceControls.style.display = isPractice ? 'block' : 'none';
    testControls.style.display = isPractice ? 'none' : 'block';
    testActions.style.display = isPractice ? 'none' : 'block';
    modeIndicator.textContent = isPractice ? "Practice Mode" : "Test Mode";
    questionNumber.textContent = isPractice ? "Question 1 of 200" : "Test Mode";
    
    // Initialize based on mode
    if (isPractice) {
        initQuiz();
    } else {
        startTest();
    }
}

// Start Test
function startTest() {
    // Select 30 random questions for test
    testModeQuestions = getRandomQuestions(30);
    testModeAnswers.fill(null);
    testStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    timeElapsed = 0;
    
    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeElapsed++;
        timer.textContent = formatTime(timeElapsed);
    }, 1000);
    
    // Load first test question
    loadTestQuestion(0);
}

// Get Random Questions
function getRandomQuestions(count) {
    const shuffled = [...quizData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Submit Test
function submitTest() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Calculate score
    let correct = 0;
    testModeQuestions.forEach((question, index) => {
        if (testModeAnswers[index] === question.answer) {
            correct++;
        }
    });
    
    score = correct;
    const percentageScore = Math.round((correct / 30) * 100);
    
    // Update results modal
    finalScore.textContent = correct;
    correctCount.textContent = correct;
    incorrectCount.textContent = 30 - correct;
    timeTaken.textContent = formatTime(timeElapsed);
    percentage.textContent = `${percentageScore}%`;
    
    // Set result message
    if (percentageScore >= 90) {
        resultMessage.textContent = "Excellent! 🎉 You have mastered UHV!";
    } else if (percentageScore >= 70) {
        resultMessage.textContent = "Great job! 👍 Good understanding of UHV.";
    } else if (percentageScore >= 50) {
        resultMessage.textContent = "Good effort! 📚 Keep practicing.";
    } else {
        resultMessage.textContent = "Keep learning! 💪 Review and try again.";
    }
    
    // Show results modal
    resultsModal.classList.add('show');
}

// Format Time
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Initialize Question Selector
function initQuestionSelector() {
    questionSelect.innerHTML = '';
    for (let i = 1; i <= quizData.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `Question ${i}`;
        questionSelect.appendChild(option);
    }
}

// Event Listeners
practiceModeBtn.addEventListener('click', () => switchMode(true));
testModeBtn.addEventListener('click', () => switchMode(false));

hinglishBtn.addEventListener('click', () => {
    hinglishExplanation.classList.toggle('show');
});

prevBtn.addEventListener('click', () => {
    if (isPracticeMode) {
        loadPracticeQuestion(currentQuestionIndex - 1);
    } else {
        loadTestQuestion(currentQuestionIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (isPracticeMode) {
        loadPracticeQuestion(currentQuestionIndex + 1);
    } else {
        loadTestQuestion(currentQuestionIndex + 1);
    }
});

questionSelect.addEventListener('change', (e) => {
    const index = parseInt(e.target.value) - 1;
    if (isPracticeMode) {
        loadPracticeQuestion(index);
    }
});

submitTestBtn.addEventListener('click', submitTest);

reviewBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    // Switch to practice mode to review
    switchMode(true);
});

retakeBtn.addEventListener('click', () => {
    resultsModal.classList.remove('show');
    switchMode(false);
});

// Initialize
initQuestionSelector();
initQuiz();

testPrevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        loadTestQuestion(currentQuestionIndex - 1);
    }
});

testNextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < 29) {
        loadTestQuestion(currentQuestionIndex + 1);
    }
});
