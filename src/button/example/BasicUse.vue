<script setup>
import { watchLang } from '@varlet/cli/site/utils'
import { pack, use } from './locale'
import { Button } from '@varlet/ui'
import '@varlet/ui/es/button/style/index.js'

watchLang(use)
</script>

<template>
    <var-button type="primary">{{ pack.primaryButton }}</var-button>
    <var-button type="info">{{ pack.infoButton }}</var-button>
    <var-button type="success">{{ pack.successButton }}</var-button>
    <var-button type="warning">{{ pack.warningButton }}</var-button>
    <var-button type="danger">{{ pack.dangerButton }}</var-button>
</template>
