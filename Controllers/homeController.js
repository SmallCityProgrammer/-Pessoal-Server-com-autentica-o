const express = require("express");
const authService = require("../Service/authService")
const Product = require("../Models/productSchema")

exports.post = ('/', authService.authorize , async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/home')
})