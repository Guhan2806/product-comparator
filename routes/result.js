const express=require('express')
const request = require('request');
const cheerio = require('cheerio');
const router =express.Router()
var flip_res=[]
var amaz_res=[]
function scrap_flipkart(result){
    flip_res.length=0
    var temp=result.split(" ")
    var flip_link= 'https://www.flipkart.com/search?q='
    flip_link=flip_link+temp[0]
    for(var i=1;i<temp.length;i++)
    {
      flip_link=flip_link+'+'+temp[i]
    }
    request(flip_link, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    $('._2kHMtA').each((i,el)=>{
       const title=$(el).find('._4rR01T').html()
       const price=$(el).find('._30jeq3').html()
       const img=$(el).find('._396cs4._3exPp9').attr().src
       const link=$(el).find('._1fQZEK').attr().href
       const f_link='https://www.flipkart.com'+link
      flip_res.push({title,price,img,f_link})
    })
    console.log(flip_res)
    return flip_res
    }
  }
)
return flip_res
}
function scrap_amazon(result)
{
  var temp=result.split(" ")
    var amaz_link= 'https://www.amazon.in/s?k='
    amaz_link=amaz_link+temp[0]
    for(var i=1;i<temp.length;i++)
    {
      amaz_link=amaz_link+'+'+temp[i]
    }
    request(amaz_link, (error, response, html) => {
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
      amaz_res.push({title,price,img,a_link})
    })
    return amaz_res
    }
    return amaz_res
});
return amaz_res
}
router.post('/result',(req,res)=>{
    const result=req.body.res
    const f_res=scrap_flipkart(result)
    const a_res=scrap_amazon(result)
    console.log(f_res)
    res.json({flipkart:f_res,amazon:a_res})
    amaz_res.length=0
    flip_res.length=0
})
module.exports=router