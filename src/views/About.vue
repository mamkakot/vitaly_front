<template>
  <div class="about">
    <h1>Здесь собрано всё, что нам известно о Виталике</h1>
    <h5>
      (он ещё толком не изучен, потому что от него чаще получали пизды, чем
      информацию)
    </h5>
    <el-row>
      <el-col :span="24">
        <el-image
          :src="require('../assets/vit1.jpg')"
          class="vitaly"
          contain
        ></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.about {
  text-align: left;
}

.about h1 {
  margin-bottom: 0%;
}

.about h5 {
  font-weight: 100;
  margin-top: 0%;
}

.vitaly {
  max-width: 50%;
  border-radius: 10px;
}

@media only screen and (max-width: 558px) {
  .vitaly {
    max-width: 100%;
  }
}
</style>
