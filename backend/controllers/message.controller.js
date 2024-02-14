import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id; // Ensure the correct field name is used (e.g., _id)
  
      let conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });
  
      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
  
      const newMessage = new Message({
        senderId,
        receiverId,
        message,
      });
  
      if (newMessage) {
        conversation.messages.push(newMessage._id);
      }
    //   await newMessage.save();
    //   await conversation.save();

    //this will run in paralled
    await Promise.all([conversation.save(),newMessage.save()]);
  
      res.status(201).json({ newMessage });
    } catch (error) {
      console.log("Error in sendMessage controller: ", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  


  export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // Now, it will reference the "messages" field in the Conversation schema

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}