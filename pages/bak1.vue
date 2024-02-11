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
                <eye-outlined key="view" @click="viewCard(index)" />
                <edit-outlined key="edit" @click="editCard(index)" />
                <delete-outlined key="delete" @click="deleteCard(index)" />
              </template>
              <a-card-meta :title="item.title">
                <template #description>
                  <a-typography-paragraph ellipsis>
                    {{ item.description }}
                  </a-typography-paragraph>
                </template>
                <template #avatar>
                  <a-avatar src="https://joeschmoe.io/api/v1/random" />
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
        </a-row>
  
        <!-- Conditionally render a-empty based on hasCards -->
        <a-empty v-if="!hasCards" />
      </a-card>
  
      <a-modal v-model:open="open" :title="isViewMode ? 'Card Details' : (isEditMode ? 'Edit Card' : 'Add Card')" @ok="handleOk" @cancel="handleCancel">
        <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-item label="Card Title">
            <a-input v-model:value="formState.name" :disabled="isViewMode" />
          </a-form-item>
          <a-form-item label="Description">
            <a-textarea v-model:value="formState.desc" :disabled="isViewMode" />
          </a-form-item>
        </a-form>
  
        <template #footer>
          <a-button key="isViewMode ? 'close' : 'cancel'" @click="handleCancel">{{ isViewMode ? 'Close' : 'Cancel' }}</a-button>
          <a-button key="reset" @click="resetForm" v-if="!isViewMode">Reset</a-button>
          <a-button key="edit" v-if="isViewMode" @click="enterEditMode">Edit</a-button>
          <a-button key="save" type="primary" :loading="loading" @click="handleOk" v-if="!isViewMode && !isEditMode">Save</a-button>
          <a-button key="update" type="primary" :loading="loading" v-if="isEditMode && !isViewMode" @click="handleUpdate">Update</a-button>
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
    editedCardIndex?: number; // Add this line
  }
  
  interface CardItem {
    title: string;
    description: string;
  }
  
  export default defineComponent({
    data() {
      return {
        open: false,
        isViewMode: false, // New flag to indicate whether the modal is in view mode
        isEditMode: false, // New flag to indicate whether the modal is in edit mode
        editedCardIndex: -1, // Initialize with an invalid index
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
        hasCards: false, // Initialize as false since there are no cards initially
        loading: false,
      };
    },
    methods: {
      showModal() {
        this.open = true;
        this.resetForm();
        this.isViewMode = false; // Reset the view mode flag
        this.isEditMode = false; // Reset the edit mode flag
      },
  
      handleOk() {
        if (!this.formState.name || !this.formState.desc) {
          // Handle validation error
          return;
        }
  
        // Set loading to true during submission
        this.loading = true;
  
        // Simulate an asynchronous operation (e.g., API call)
        setTimeout(() => {
          const newCard: CardItem = {
            title: this.formState.name,
            description: this.formState.desc,
            // Other properties as needed...
          };
  
          this.cardItems.push(newCard);
          this.hasCards = true;
          this.open = false;
          this.resetForm();
  
          // Reset loading after the submission is complete
          this.loading = false;
        }, 1000); // Replace this with your actual submission logic (e.g., API call)
      },
  
  
      handleCancel() {
        this.open = false;
      },
  
      resetForm() {
        this.formState.name = '';
        this.formState.desc = '';
      },
  
      viewCard(index: number) {
        // Implement logic to handle the "View" action
        const selectedCard = this.cardItems[index];
        console.log(`Viewing card:`, selectedCard);
  
        // Populate form with card data
        this.formState.name = selectedCard.title;
        this.formState.desc = selectedCard.description;
  
        // Set the view mode flag to disable form inputs
        this.isViewMode = true;
        this.open = true;
      },
  
      enterEditMode() {
        this.isEditMode = true;
        this.isViewMode = false;
      },
  
      editCard(index: number) {
        // Implement logic to handle the "Edit" action
        const selectedCard = this.cardItems[index];
        console.log(`Editing card:`, selectedCard);
  
        // Set the editedCardIndex
        this.editedCardIndex = index;
  
        // Populate form with card data
        this.formState.name = selectedCard.title;
        this.formState.desc = selectedCard.description;
  
        // Set the view mode flag to disable form inputs
        this.isViewMode = false; // Set to false to enable form inputs
        this.enterEditMode(); // Call enterEditMode to enter edit mode
        this.open = true; // Open the modal
      },
  
      deleteCard(index: number) {
        // Implement logic to handle the "Delete" action
        const deletedCard = this.cardItems.splice(index, 1)[0];
        console.log(`Deleting card:`, deletedCard);
  
        // Update the hasCards flag based on the remaining cards
        this.hasCards = this.cardItems.length > 0;
      },
  
      handleUpdate() {
        if (!this.formState.name || !this.formState.desc) {
          // Handle validation error
          return;
        }
  
        // Set loading to true during submission
        this.loading = true;
  
        // Simulate an asynchronous operation (e.g., API call)
        setTimeout(() => {
          const updatedCard: CardItem = {
            title: this.formState.name,
            description: this.formState.desc,
          };
  
          if (this.isEditMode && this.editedCardIndex !== -1) {
            // Update existing card
            this.cardItems[this.editedCardIndex] = updatedCard;
          } else {
            // Add new card
            this.cardItems.push(updatedCard);
            this.hasCards = true;
          }
  
          this.open = false;
          this.resetForm();
  
          // Reset loading after the submission is complete
          this.loading = false;
        }, 1000); // Replace this with your actual submission logic (e.g., API call)
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