const express = require("express");
const authService = require("../Service/authService")
const Product = require("../Models/productSchema")

exports.post = ('/', authService.authorize , async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/home')
})

exports.get = ('/', authService.authorize , async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/home')
})

exports.put = ('/:id', authService.authorize , async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/home')
})

exports.delete = ('/:id', authService.authorize , async (req,res) => {
  const product = await Product.create(req.body);
  res.status(200).redirect('/home')
})