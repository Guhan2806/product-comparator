const express=require('express')
const request = require('request');
const cheerio = require('cheerio');
const router =express.Router()
var flip_res=[]
    var title=''
      var price=''
      var img=''
      var link=''
      var f_link=''
var amaz_res={}
function scrap_flipkart(result){
    
    request('https://www.flipkart.com/search?q=poco+m4', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('._2kHMtA').each((i,el)=>{
       title=$(el).find('._4rR01T').html()
       price=$(el).find('._30jeq3').html()
       img=$(el).find('._396cs4._3exPp9').attr().src
       link=$(el).find('._1fQZEK').attr().href
             f_link='https://www.flipkart.com'+link
      flip_res.push({title:title,price:price,img:img,f_link:f_link})
    })
    return flip_res[0]
    }
}
)
}
function scrap_amazon(result)
{
    request('https://www.amazon.in/s?k=poco+m4+pro', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('.s-card-container.s-overflow-hidden.aok-relative.puis-include-content-margin.s-latency-cf-section.s-card-border').each((i,el)=>{
      const title=$(el).find('.a-size-medium.a-color-base.a-text-normal')
      .html()
      const price=$(el).find('.a-price').find('.a-price-whole')
      .html()
      const img=$(el).find('.s-image').attr().src
      const link=$(el).find('.a-size-base.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal').attr()
      if(link)
      {
        a_link='https://www.amazon.in'+link.href
      }
      if(title!=null &&price!=null)
      console.log(title,price,img,a_link)
    })
    }
});
}
router.post('/result',(req,res)=>{
    const result=req.body.res
    const summa=scrap_flipkart(result)
    console.log(summa)
})
module.exports=router