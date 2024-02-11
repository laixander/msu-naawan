<template>
    <a-flex vertical gap="middle">
      <a-row justify="space-between" :gutter="[0, 8]">
        <a-col :xs="24" :sm="8" :xl="4">
          <a-input-search placeholder="Search keyword" />
        </a-col>
        <a-col :xs="24" :sm="4" align="right">
          <a-button type="primary" class="action-button" @click="showModal">
            <template #icon>
              <PlusOutlined />
            </template>
            Add Card
          </a-button>
        </a-col>
      </a-row>
  
      <a-card title="Card title" :bordered="false" :bodyStyle="{ backgroundColor: '#f8f9fa' }">
        <template #extra>
          <a-segmented v-model:value="value" :options="data">
            <template #label="{ payload = {} }">
              <template v-if="payload.icon">
                <a-avatar :style="payload.style">
                  <template #icon><component :is="payload.icon" /></template>
                </a-avatar>
              </template>
            </template>
          </a-segmented>
        </template>
        <a-row :gutter="[16, 16]">
          <a-col v-for="(item, index) in cardItems" :key="index" :xs="24" :sm="12" :md="6">
            <a-card hoverable :item="item">
              <template #actions>
                <eye-outlined @click="viewCard(index)" />
                <edit-outlined @click="editCard(index)" />
                <delete-outlined @click="deleteCard(index)" />
              </template>
              <a-card-meta :title="item.title">
                <template #description>
                  <a-typography-paragraph ellipsis>{{ item.description }}</a-typography-paragraph>
                </template>
                <template #avatar>
                  <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
  
        <a-empty v-if="!hasCards" />
      </a-card>
  
      <a-modal v-model:open="open" :title="modalTitle" @ok="handleOk" @cancel="handleCancel">
        <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="Card Title">
            <a-input v-model:value="formState.name" :disabled="isViewMode" />
          </a-form-item>
          <a-form-item label="Description">
            <a-textarea v-model:value="formState.desc" :disabled="isViewMode" />
          </a-form-item>
        </a-form>
  
        <template #footer>
          <a-button :key="isViewMode ? 'close' : 'cancel'" @click="handleCancel">{{ isViewMode ? 'Close' : 'Cancel' }}</a-button>
          <a-button key="reset" @click="resetForm" v-if="!isViewMode">Reset</a-button>
          <a-button key="edit" v-if="isViewMode" @click="enterEditMode">Edit</a-button>
          <a-button key="submit" type="primary" :loading="loading" @click="handleSubmit">{{ submitButtonText }}</a-button>
        </template>
      </a-modal>
    </a-flex>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IdcardOutlined, TableOutlined, PlusOutlined, EyeOutlined } from '@ant-design/icons-vue';
  
  interface FormState {
    name: string;
    desc: string;
    editedCardIndex?: number;
    }
  
  interface CardItem {
    title: string;
    description: string;
  }
  
  export default defineComponent({
    data() {
      return {
        open: false,
        isViewMode: false,
        isEditMode: false,
        editedCardIndex: -1,
        formState: {
          name: '',
          desc: '',
        } as FormState,
        cardItems: [] as CardItem[],
        labelCol: {
          style: { width: '150px' },
        },
        wrapperCol: {
          span: 14,
        },
        data: [
          {
            value: 'card',
            payload: {
              icon: IdcardOutlined,
              style: { backgroundColor: 'transparent', color: 'rgba(0, 0, 0, 0.88)' },
            },
          },
          {
            value: 'table',
            payload: {
              icon: TableOutlined,
              style: { backgroundColor: 'transparent', color: 'rgba(0, 0, 0, 0.88)' },
            },
          },
        ],
        value: 'card',
        hasCards: false,
        loading: false,
      };
    },
    computed: {
      modalTitle(): string {
        if (this.isViewMode) return 'Card Details';
        return this.isEditMode ? 'Edit Card' : 'Add Card';
      },
      submitButtonText(): string {
        if (this.isEditMode || this.isViewMode) return 'Update';
        // return this.isViewMode ? 'Close' : 'Save';
        return 'Save'
      },
    },
    methods: {
      showModal() {
        this.open = true;
        this.resetForm();
        this.isViewMode = false;
        this.isEditMode = false;
      },
  
      handleOk() {
        if (!this.formState.name || !this.formState.desc) return;
  
        this.loading = true;
  
        setTimeout(() => {
          const newCard: CardItem = {
            title: this.formState.name,
            description: this.formState.desc,
          };
  
          if (this.isEditMode) {
            this.cardItems[this.editedCardIndex] = newCard;
          } else {
            this.cardItems.push(newCard);
            this.hasCards = true;
          }
  
          this.open = false;
          this.resetForm();
          this.loading = false;
        }, 1000);
      },
  
      handleCancel() {
        this.open = false;
      },
  
      resetForm() {
        this.formState.name = '';
        this.formState.desc = '';
      },
  
      viewCard(index: number) {
        const selectedCard = this.cardItems[index];
        this.formState.name = selectedCard.title;
        this.formState.desc = selectedCard.description;
        this.isViewMode = true;
        this.open = true;
      },
  
      enterEditMode() {
        this.isEditMode = true;
        this.isViewMode = false;
      },
  
      editCard(index: number) {
        const selectedCard = this.cardItems[index];
        this.editedCardIndex = index;
        this.formState.name = selectedCard.title;
        this.formState.desc = selectedCard.description;
        this.isViewMode = false;
        this.enterEditMode();
        this.open = true;
      },
  
      deleteCard(index: number) {
        this.cardItems.splice(index, 1);
        this.hasCards = this.cardItems.length > 0;
      },
  
      handleSubmit() {
        if (!this.formState.name || !this.formState.desc) return;
  
        this.loading = true;
  
        setTimeout(() => {
          const updatedCard: CardItem = {
            title: this.formState.name,
            description: this.formState.desc,
          };
  
          if (this.isEditMode && this.editedCardIndex !== -1) {
            this.cardItems[this.editedCardIndex] = updatedCard;
          } else {
            this.cardItems.push(updatedCard);
            this.hasCards = true;
          }
  
          this.open = false;
          this.resetForm();
          this.loading = false;
        }, 1000);
      },
    },
  });
  </script>
  
  <style scoped lang="scss">
  .action-button {
    width: 100%;
  }
  @media (min-width: 575px) {
    .action-button {
      width: auto;
    }
  }
  </style>
  