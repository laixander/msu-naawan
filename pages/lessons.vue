<template>
    <section class="container" style="margin: 0 auto; width: 100%; max-width: 1440px;">
        <a-space direction="vertical" size="middle" class="lessons">
            <a-typography-title :level="5">
                Interview Questions for UI/UX Designer
            </a-typography-title>

            <a-collapse v-model:activeKey="activeKey" accordion>
                <a-collapse-panel v-for="(faq, index) in faqs" :key="index" :header="faq.question">
                  <p>{{ faq.answer }}</p>
                </a-collapse-panel>
            </a-collapse>
        </a-space>
    </section>
</template>

<script lang="ts" setup>
    import { ref } from 'vue';
    const activeKey = ref([]);
    const faqs = ref([
        { 
            question: 'Can you tell me about your design process and how you integrate usability testing and user feedback?',

            answer: 'My design process typically starts with research and brainstorming to understand project requirements. Then, I create prototypes and conduct usability testing with users. Their feedback guides me in refining designs to ensure they\'re user-friendly and effective.'
        }, 
        { 
            question: 'Can you provide an example of a difficult project you\'ve worked on, explain how you solve it, and describe the outcome.',

            answer: 'One challenging project I worked on involved redesigning a complex e-commerce website with a cluttered interface. To solve this, I conducted user interviews and analyzed feedback to identify pain points. Then, I created simplified wireframes and prototypes to streamline the user experience. The outcome was a more intuitive website layout that led to increased user engagement and higher conversion rates.'
        },
        { 
            question: 'How do you strike a balance between design aesthetics and user-centered, intuitive design?',

            answer: 'Balancing design aesthetics with user-centered, intuitive design involves prioritizing user needs while maintaining visual appeal. I achieve this by understanding user preferences through research and feedback, then integrating these insights into the design process. Iterative testing helps ensure the final product not only looks good but also functions seamlessly for users.'
        },

        { 
            question: 'How do you to keep yourself informed about the latest design trends?',

            answer: 'To stay updated on the latest design trends, I regularly engage in various activities such as reading design blogs and articles, following influential designers on social media platforms, attending design conferences and workshops, and participating in online forums and communities. Additionally, I make it a point to experiment with new tools and techniques to broaden my skillset and stay ahead of emerging trends in the industry.'
        },
        { 
            question: 'What design tools do you use and how do they help improve your design process?',

            answer: 'I utilize a range of design tools to enhance my design process, including industry-standard software like Adobe Creative Suite (Photoshop, Illustrator, XD), Sketch, Figma, and prototyping tools like InVision or Marvel. These tools enable me to efficiently create wireframes, mockups, and prototypes, facilitating collaboration with stakeholders and developers. Additionally, they offer features such as version control and real-time collaboration, streamlining communication and ensuring smooth project workflows from conception to delivery.'
        },
    ]);
</script>

<style scoped lang="scss">
.container {
    padding: 24px;
    &-cards {
        width: 100%;
        > :deep(.ant-card-body) {
            border-top: 1px solid #F0F0F0;
            background-color: #F8F9FA;
        } 
    }
    .lessons {
        width: 100%;
        &-info {
            width: 100%;
            text-align: center;
            .ant-avatar {
                margin-bottom: 0.35em;
            }
            .ant-typography {
                margin-bottom: 0;
            }
        }
        .toolbar {
            @media (min-width: 576px) {
                flex-direction: row;
                .ant-input-search {
                    width: 200px;
                }
            }
        }
        .ant-table-wrapper {
            .ant-table-tbody {
                > tr.ant-table-row {
                    &:hover {
                        > td {
                            background-color: #e6f4ff;
                        }
                    }
                }
            }
        }
        :deep(.ant-collapse-header-text) {
            font-weight: 600;
        }
    }
}
</style>