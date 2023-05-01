const Player = require('../models/playerModel')

exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find()

    res.status(200).json({
      status: 'success',
      results: players.length,
      data: {
        players,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id)

    res.status(200).json({
      status: 'success',
      data: {
        player,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.getRandomPlayer = async (req, res) => {
  try {
    const count = await Player.countDocuments()
    const rand = Math.floor(Math.random() * count)
    const player = await Player.findOne().skip(rand)

    res.status(200).json({
      status: 'success',
      data: {
        name: player.name,
        surname: player.surname,
        image: player.Image,
      },
    })
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.createPlayer = async (req, res) => {
  try {
    playerInfo = req.body
    const newPlayer = await Player.create(playerInfo)

    res.status(201).json({
      status: 'success',
      data: {
        player: newPlayer,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.updatePlayer = async (req, res) => {
  const playerInfo = req.body
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, playerInfo, {
      new: true,
      runValidators: true,
    })

    res.status(200).json({
      status: 'success',
      data: {
        player,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.deletePlayer = async (req, res) => {
  try {
    await Player.findByIdAndDelete(req.params.id)

    res.status(204).json({
      status: 'success',
      data: null,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
