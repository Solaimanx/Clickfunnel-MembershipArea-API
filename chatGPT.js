const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.GPT_KEY,
});

const getQuestionsBasedOnTopic = async (req, res) => {
  const { level, topic } = req.body;
  if(!level || !topic) return res.status(404).send('input cant be Empty')

  try {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        {
          role: "user",
          content: `List 25 common sentences in plain English (complete sentences, no brackets, ${level}) on the following topic: ${topic}`,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });

    const raw = completion.choices[0].message.content;
    const data = JSON.parse(raw);
    res.json({ questions: data.sentences });
  } catch (err) {
    console.log(err);
    res.status(404).send("failed");
  }
};

module.exports = {
  getQuestionsBasedOnTopic,
};
