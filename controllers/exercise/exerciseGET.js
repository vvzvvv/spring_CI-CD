const { getExerciseByDate } = require('../../models/exerciseQuery');

module.exports =async (req, res) => {
    try {
        const userID = 1;
        //const {date} = req.params.date; 원래있떤거
        const {date} = req.params;
        const result = await getExerciseByDate(userID, date)

        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ message: '운동 기록 삭제 중 오류 발생', error });
    }
}



// 운동 기록 삭제
// exports.deleteExercise = async (req, res) => {
//     try {
//         await Exercise.findByIdAndDelete(req.params.id);
//         res.status(204).send();
//     } catch (error) {
//         res.status(500).json({ message: '운동 기록 삭제 중 오류 발생', error });
//     }
// };

