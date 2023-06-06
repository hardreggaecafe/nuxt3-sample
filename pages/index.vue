<template>
  <div class="flex flex-col"> 
    <div class="text-4xl font-bold underline">今日のおすすめ</div>
    <div class="m-3 bg-white rounded-lg shadow">
      <ul class="divide-y-2 divide-gray-100">
        <li class="p-3 hover:bg-blue-100" v-for="item in items">
          <span class="font-bold text-white bg-red-900" v-if="item.price >1000">高級品</span>{{ item.message }}:　{{ item.price }}円
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
 export default {
  data: () =>{
  return {
    items: [{ message: 'たこ焼き', price: 400 }, { message: '串かつセット', price: 1200 }, { message: '男はつらいよ', price: 900 }, { message: '梅くらげ', price: 200 }]
  }
}}
</script>
