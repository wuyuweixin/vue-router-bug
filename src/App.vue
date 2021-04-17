<template>
  <RouterView #default="{ Component }">
    <Transition>
      <KeepAlive>
        <component :is="Component"/>
      </KeepAlive>
    </Transition>
  </RouterView>
</template>
